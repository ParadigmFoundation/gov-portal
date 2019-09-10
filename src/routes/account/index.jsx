/**
 * Handles the logic of the Account portal
 */

import React, {
  useContext,
  useEffect,
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
  const state = useContext(GovContext);

  console.log(state);

  const {
    initialized,
    ethBalance,
    systemBalance,
    totalBalance,
    activities,
    walletBalance,
    bondedTokens,
    stakedTokens,
    treasuryBalance,
    allowance,
    gov,
  } = state;

  useEffect(() => {
    document.title = 'Account | Paradigm';
  }, []);

  const MAX_UINT_256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

  return (
    <AccountView
      metaMaskConnected={initialized}
      treasuryAllowance={allowance}
      walletBalance={walletBalance}
      ethBalance={ethBalance}
      totalBalance={totalBalance}
      systemBalance={systemBalance}
      bondedTokens={bondedTokens}
      tokensStakedFor={stakedTokens}
      treasuryBalance={treasuryBalance}
      confirmListing={initialized ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      resolveChallenge={initialized ? gov.kosu.validatorRegistry.confirmListing : () => {}}
      bondTokens={initialized ? (value, newValue) => bond(gov.kosu, value, newValue) : () => {}}
      addToTreasury={initialized ? amount => gov.kosu.treasury.deposit(gov.web3.utils.toWei(amount)) : () => {}}
      removeTreasury={initialized ? () => gov.kosu.treasury.withdraw(gov.web3.utils.toWei(treasuryBalance)) : () => {}}
      setTreasuryAllowance={initialized ? () => gov.kosu.treasury.approveTreasury(MAX_UINT_256) : () => {}}
      updateBalance={initialized ? (currentBalance, newBalance) => updateBalance(gov.kosu, currentBalance, newBalance) : () => {}}
      orders={OrdersDummyData}
      activities={initialized && activities.reverse()}
      pay={initialized ? value => gov.kosu.kosuToken.pay(
        gov.web3.utils.toWei(value),
      ) : () => {}}
      estimate={initialized ? value => estimateEtherToToken(gov.kosu, value) : () => {}}
      estimateNewPostLimit={initialized ? value => estimateNewPostLimit(gov.kosu, value) : () => {}}
    />
  );
}

export default Account;
