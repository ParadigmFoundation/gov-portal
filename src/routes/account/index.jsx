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
    />
  );
}

export default Account;
