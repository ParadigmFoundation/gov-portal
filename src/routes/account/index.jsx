/**
 * Handles the logic of the Account portal
 */

import React, {
  useContext,
} from 'react';

import GovContext from '../../store/govContext';

import AccountView from './components/accountView';

import {
  estimateNewPostLimit,
  updateBalance,
  estimateEtherToToken,
  bond,
} from '../../utils/kosu';

function Account() {
  const {
    dispatch,
    gov,
    isReady,
    ethBalance,
    walletBalance,
    systemBalance,
    bondedTokens,
    treasuryBalance,
    treasuryAllowance,
    stakedTokens,
    totalBalance,
    pastActivity,
    orders,
    pastChallenges,
  } = useContext(GovContext);

  const MAX_UINT_256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

  return (
    <AccountView
      metaMaskConnected={isReady}
      treasuryAllowance={treasuryAllowance}
      walletBalance={walletBalance}
      ethBalance={ethBalance}
      totalBalance={totalBalance}
      systemBalance={systemBalance}
      bondedTokens={bondedTokens}
      tokensStakedFor={stakedTokens}
      treasuryBalance={treasuryBalance}
      confirmListing={isReady ? async (key) => {
        await gov.kosu.validatorRegistry.confirmListing(key);
      } : () => { }}
      resolveChallenge={isReady ? async (key) => {
        await gov.kosu.validatorRegistry.resolveChallenge(key);
      } : () => { }}
      bondTokens={isReady ? async (value, newValue) => {
        await bond(gov.kosu, value, newValue);

        dispatch({
          type: 'set',
          target: 'bondedTokens',
          value: newValue,
        });
      } : () => { }}
      addToTreasury={isReady ? async (amount) => {
        await gov.kosu.treasury.deposit(gov.web3.utils.toWei(amount));

        dispatch({
          type: 'add',
          target: 'treasuryBalance',
          value: amount,
        });

        dispatch({
          type: 'add',
          target: 'systemBalance',
          value: amount,
        });
      } : () => { }}
      removeTreasury={isReady ? async () => {
        await gov.kosu.treasury.withdraw(gov.web3.utils.toWei(treasuryBalance));

        dispatch({
          type: 'set',
          target: 'treasuryBalance',
          value: '',
        });

        dispatch({
          type: 'sub',
          target: 'systemBalance',
          value: treasuryBalance,
        });
      } : () => { }}
      setTreasuryAllowance={isReady ? async () => {
        dispatch({
          type: 'set',
          target: 'treasuryAllowance',
          value: '',
        });

        await gov.kosu.treasury.approveTreasury(MAX_UINT_256);

        dispatch({
          type: 'set',
          target: 'treasuryAllowance',
          value: MAX_UINT_256,
        });
      } : () => { }}
      updateBalance={isReady ? async (currentBalance, newBalance) => {
        await updateBalance(gov.kosu, currentBalance, newBalance);

        dispatch({
          type: 'set',
          target: 'treasuryBalance',
          value: newBalance,
        });

        if (parseFloat(currentBalance) < parseFloat(newBalance)) {
          dispatch({
            type: 'add',
            target: 'systemBalance',
            value: parseFloat(newBalance) - parseFloat(currentBalance),
          });

          dispatch({
            type: 'sub',
            target: 'walletBalance',
            value: parseFloat(newBalance) - parseFloat(currentBalance),
          });
        } else {
          dispatch({
            type: 'sub',
            target: 'systemBalance',
            value: parseFloat(currentBalance) - parseFloat(newBalance),
          });

          dispatch({
            type: 'add',
            target: 'walletBalance',
            value: parseFloat(currentBalance) - parseFloat(newBalance),
          });
        }
      } : () => { }}
      orders={orders}
      activities={pastActivity}
      pay={isReady ? async (value, expectedTokens) => {
        try {
          await gov.kosu.kosuToken.pay(
            gov.web3.utils.toWei(value),
          );

          dispatch({
            type: 'add',
            target: 'walletBalance',
            value: expectedTokens,
          });

          dispatch({
            type: 'add',
            target: 'totalBalance',
            value: expectedTokens,
          });
        } catch (err) {
          throw new Error('Transaction failed');
        }
      } : () => { }}
      estimate={isReady ? value => estimateEtherToToken(gov.kosu, value) : () => { }}
      estimateNewPostLimit={isReady ? value => estimateNewPostLimit(gov.kosu, value) : () => { }}
      pastChallenges={pastChallenges}
    />
  );
}

export default Account;
