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

import OrdersDummyData from '../../assets/content/ordersDummy.json';

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
    govActivities,
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
      confirmListing={isReady ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      resolveChallenge={isReady ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      bondTokens={isReady ? (value, newValue) => {
        bond(gov.kosu, value, newValue);
      } : () => {}}
      addToTreasury={isReady ? async (amount) => {
        await gov.kosu.treasury.deposit(gov.web3.utils.toWei(amount));

        dispatch({
          type: 'add',
          target: 'treasuryBalance',
          value: amount,
        });
      } : () => {}}
      removeTreasury={isReady ? () => gov.kosu.treasury.withdraw(gov.web3.utils.toWei(treasuryBalance)) : () => {}}
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
      } : () => {}}
      updateBalance={isReady ? (currentBalance, newBalance) => updateBalance(gov.kosu, currentBalance, newBalance) : () => {}}
      orders={OrdersDummyData}
      activities={govActivities.reverse()}
      pay={isReady ? value => gov.kosu.kosuToken.pay(
        gov.web3.utils.toWei(value),
      ) : () => {}}
      estimate={isReady ? value => estimateEtherToToken(gov.kosu, value) : () => {}}
      estimateNewPostLimit={isReady ? value => estimateNewPostLimit(gov.kosu, value) : () => {}}
    />
  );
}

export default Account;
