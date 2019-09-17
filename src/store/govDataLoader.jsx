import React, {
  useEffect,
  useContext,
} from 'react';

import GovContext from './govContext';

import App from '../components/app';

import {
  getPastActivities,
} from '../utils/kosu';

function GovDataLoader() {
  const state = useContext(GovContext);

  const {
    dispatch,
    gov,
    coinbase,
  } = state;

  useEffect(() => {
    async function init() {
      try {
        await gov.init();

        if (gov.initialized) {
          dispatch({
            type: 'set',
            target: 'isReady',
            value: true,
          });

          dispatch({
            type: 'set',
            target: 'coinbase',
            value: window.ethereum.selectedAddress,
          });

          if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
              dispatch({
                type: 'set',
                target: 'coinbase',
                value: accounts[0],
              });
            });
          }
        }
      } catch (err) {
        throw new Error(err);
      }
    }

    init();
  }, []);

  useEffect(() => {
    async function getData() {
      if (coinbase) {
        console.log('Getting data for address:', coinbase);

        const ethBalanceReq = await gov.web3.eth.getBalance(coinbase);
        dispatch({
          type: 'set',
          target: 'ethBalance',
          value: gov.web3.utils.fromWei(ethBalanceReq.toString()),
        });

        const walletBalanceReq = await gov.kosu.kosuToken.balanceOf(coinbase);
        dispatch({
          type: 'set',
          target: 'walletBalance',
          value: gov.web3.utils.fromWei(walletBalanceReq.toString()),
        });

        const systemBalanceReq = await gov.kosu.treasury.systemBalance(coinbase);
        dispatch({
          type: 'set',
          target: 'systemBalance',
          value: gov.web3.utils.fromWei(systemBalanceReq.toString()),
        });

        dispatch({
          type: 'set',
          target: 'totalBalance',
          value: gov.web3.utils.fromWei(walletBalanceReq.plus(systemBalanceReq).toString()),
        });

        const bondedTokensReq = await gov.kosu.posterRegistry.tokensRegisteredFor(coinbase);
        dispatch({
          type: 'set',
          target: 'bondedTokens',
          value: gov.web3.utils.fromWei(bondedTokensReq.toString()),
        });

        const treasuryBalanceReq = await gov.kosu.treasury.currentBalance(coinbase);
        dispatch({
          type: 'set',
          target: 'treasuryBalance',
          value: gov.web3.utils.fromWei(treasuryBalanceReq.toString()),
        });

        dispatch({
          type: 'set',
          target: 'stakedTokens',
          value: gov.web3.utils.fromWei(
            systemBalanceReq.minus(treasuryBalanceReq).minus(bondedTokensReq).toString(),
          ),
        });

        const treasuryAllowanceReq = await gov.kosu.treasury.treasuryAllowance();
        dispatch({
          type: 'set',
          target: 'treasuryAllowance',
          value: gov.web3.utils.fromWei(treasuryAllowanceReq.toString()),
        });

        const govActivitiesReq = await getPastActivities(
          gov.kosu,
          coinbase.toLowerCase(),
        );
        dispatch({
          type: 'set',
          target: 'activities',
          value: govActivitiesReq,
        });
      }
    }

    getData();
  }, [coinbase]);

  return <App />;
}

export default GovDataLoader;
