import React, {
  useContext,
  useEffect,
} from 'react';
import Gov from '@kosu/gov-portal-helper';

import GovContext from './govContext';
import App from '../components/app';

import {
  getAllBalances,
} from '../utils/gov';

function DataLoader() {
  const state = useContext(GovContext);

  useEffect(() => {
    if (window.ethereum) {
      state.dispatch({
        action: 'set',
        target: 'address',
        value: window.ethereum.selectedAddress,
      });
    }
  }, []);

  useEffect(() => {
    async function init() {
      const gov = new Gov();

      try {
        await gov.init();
        state.dispatch({
          action: 'init',
        });

        state.dispatch({
          action: 'set',
          target: 'gov',
          value: gov,
        });
      } catch (err) {
        console.log(err);
      }
    }

    if (state.address) {
      init();
    }
  }, [state.address]);

  useEffect(() => {
    async function loadData() {
      const {
        address,
        gov,
      } = state;

      const {
        ethBalance,
        walletBalance,
        systemBalance,
        bondedTokens,
        treasuryBalance,
        totalBalance,
        stakedTokens,
        allowance,
        activities,
      } = await getAllBalances(gov, address);

      state.dispatch({
        action: 'set',
        target: 'ethBalance',
        value: ethBalance,
      });

      state.dispatch({
        action: 'set',
        target: 'walletBalance',
        value: walletBalance,
      });

      state.dispatch({
        action: 'set',
        target: 'systemBalance',
        value: systemBalance,
      });

      state.dispatch({
        action: 'set',
        target: 'bondedTokens',
        value: bondedTokens,
      });

      state.dispatch({
        action: 'set',
        target: 'treasuryBalance',
        value: treasuryBalance,
      });

      state.dispatch({
        action: 'set',
        target: 'totalBalance',
        value: totalBalance,
      });

      state.dispatch({
        action: 'set',
        target: 'stakedTokens',
        value: stakedTokens,
      });

      state.dispatch({
        action: 'set',
        target: 'allowance',
        value: allowance,
      });

      state.dispatch({
        action: 'set',
        target: 'activities',
        value: activities,
      });
    }

    loadData();
  }, [state.initialized]);

  return (
    <App />
  );
}

export default DataLoader;
