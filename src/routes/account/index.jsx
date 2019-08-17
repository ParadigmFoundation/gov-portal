/**
 * Handles the logic of the Account portal
 */

import React, {
  useContext,
  useState,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import AccountView from './components/accountView';

import OrdersDummyData from '../../assets/content/ordersDummy.json';

function Account() {
  const {
    gov,
    isReady,
  } = useContext(GovContext);

  const [totalBalance, setTotalBalance] = useState();
  const [walletBalance, setWalletBalance] = useState();
  const [systemBalance, setSystemBalance] = useState();
  const [bondedTokens, setBondedTokens] = useState();
  const [tokensStakedFor, setTokensStakedFor] = useState();
  const [treasuryBalance, setTreasuryBalance] = useState();
  const [treasuryAllowance, setTreasuryAllowance] = useState();
  const [activities, setActivities] = useState([]);

  const MAX_UINT_256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

  useEffect(() => {
    async function fetchBalances() {
      if (isReady) {
        const { coinbase } = gov;

        const walletBalanceReq = await gov.kosu.kosuToken.balanceOf(coinbase);
        setWalletBalance(gov.web3.utils.fromWei(walletBalanceReq.toString()));

        const systemBalanceReq = await gov.kosu.treasury.systemBalance(coinbase);
        setSystemBalance(gov.web3.utils.fromWei(systemBalanceReq.toString()));

        setTotalBalance(gov.web3.utils.fromWei(walletBalanceReq.plus(systemBalanceReq).toString()));

        const bondedTokensReq = await gov.kosu.posterRegistry.tokensRegisteredFor(coinbase);
        setBondedTokens(gov.web3.utils.fromWei(bondedTokensReq.toString()));

        const treasuryBalanceReq = await gov.kosu.treasury.currentBalance(coinbase);
        setTreasuryBalance(gov.web3.utils.fromWei(treasuryBalanceReq.toString()));

        setTokensStakedFor(
          gov.web3.utils.fromWei(
            systemBalanceReq.minus(treasuryBalanceReq).minus(bondedTokensReq).toString(),
          ),
        );

        const treasuryAllowanceReq = await gov.kosu.treasury.treasuryAllowance();
        setTreasuryAllowance(gov.web3.utils.fromWei(treasuryAllowanceReq.toString()));

        const govActivity = await gov.kosu.eventEmitter.getPastDecodedLogs({
          fromBlock: 0,
        });

        const govActivityData = [];
        const user = gov.coinbase;

        for (let i = 0; i < govActivity.length; i += 1) {
          switch (govActivity[i].decodedArgs.eventType) {
            case 'ValidatorRegistered': {
              if (user === govActivity[i].decodedArgs.owner) {
                const {
                  owner,
                  tendermintPublicKeyHex,
                } = govActivity[i].decodedArgs;

                const item = {
                  type: 'proposal',
                  title: 'You created a proposal',
                  status: null,
                  actionable: null,
                  challengeId: null,
                  challenger: null,
                  owner,
                  listingKey: tendermintPublicKeyHex,
                };

                const listing = await gov.kosu.validatorRegistry.getListing(tendermintPublicKeyHex);

                if (listing.status === 1 && listing.confirmationBlock === 0) {
                  item.actionable = true;
                  item.status = 'pending';
                } else if (listing.status === 2) {
                  item.actionable = false;
                  item.status = 'accepted';
                } else if (listing.status === 0) {
                  item.actionable = false;
                  item.status = 'rejected';
                } else if (listing.status === 3) {
                  item.actionable = false;
                  item.status = 'pending';
                }

                govActivityData.push(item);
              }
              break;
            }
            case 'ValidatorChallenged': {
              const {
                owner,
                challenger,
                tendermintPublicKeyHex,
                challengeId,
              } = govActivity[i].decodedArgs;

              if (owner !== user && challenger !== user) {
                break;
              }

              const item = {
                type: 'challenge',
                title: null,
                status: null,
                actionable: null,
                challengeId,
                challenger,
                owner,
                listingKey: tendermintPublicKeyHex,
              };

              const challenge = await gov.kosu.validatorRegistry.getChallenge(challengeId);
              const { listingSnapshot } = challenge;

              if (owner === user) {
                item.title = `${challenger} challenged your ${listingSnapshot.status === 1 ? 'proposal' : 'validator listing'}`;
              } else {
                item.title = `You challenged ${owner}'s ${listingSnapshot.status === 1 ? 'proposal' : 'validator listing'}`;
              }

              if (challenge.finalized === true) {
                item.actionable = true;
                if (challenge.passed === true) {
                  item.status = 'accepted';
                } else if (challenge.passed === false) {
                  item.status = 'rejected';
                }
              } else {
                item.actionable = false;
                item.status = 'pending';
              }

              govActivityData.push(item);
              break;
            }

            default:
              break;
          }
        }

        setActivities(govActivityData);
      }
    }

    fetchBalances();
  }, [isReady]);

  async function updateBalance(newBalance) {
    console.log(newBalance);

    const newBalanceWei = gov.web3.utils.toBN(gov.web3.utils.toWei(newBalance));
    const currentBalanceWei = gov.web3.utils.toBN(gov.web3.utils.toWei(treasuryBalance));

    if (newBalanceWei.comparedTo(currentBalanceWei) === 1) {
      return gov.kosu.treasury.deposit(newBalanceWei.minus(currentBalanceWei));
    } if (newBalanceWei.comparedTo(currentBalanceWei) === 1) {
      return gov.kosu.treasury.withdraw(currentBalanceWei.minus(newBalanceWei));
    }
  }

  return (
    <AccountView
      metaMaskConnected={isReady}
      treasuryAllowance={treasuryAllowance}
      walletBalance={walletBalance}
      totalBalance={totalBalance}
      systemBalance={systemBalance}
      bondedTokens={bondedTokens}
      tokensStakedFor={tokensStakedFor}
      treasuryBalance={treasuryBalance}
      confirmListing={isReady ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      resolveChallenge={isReady ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      bondTokens={isReady ? amount => gov.kosu.posterRegistry.registerTokens(gov.web3.utils.toWei(amount)) : () => {}}
      unbondTokens={isReady ? amount => gov.kosu.posterRegistry.releaseTokens(gov.web3.utils.toWei(amount)) : () => {}}
      addToTreasury={isReady ? amount => gov.kosu.treasury.deposit(gov.web3.utils.toWei(amount)) : () => {}}
      removeTreasury={isReady ? () => gov.kosu.treasury.withdraw(gov.web3.utils.toWei(treasuryBalance)) : () => {}}
      setTreasuryAllowance={isReady ? () => gov.kosu.treasury.approveTreasury(MAX_UINT_256) : () => {}}
      updateBalance={isReady ? newBalance => updateBalance(newBalance) : () => {}}
      orders={OrdersDummyData}
      activities={activities}
    />
  );
}

export default Account;
