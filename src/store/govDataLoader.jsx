import React, {
  useEffect,
  useContext,
} from 'react';
import axios from 'axios';

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
        console.log(err);
      }
    }

    if (
      window.ethereum.networkVersion === '3'
      || window.ethereum.networkVersion === '6174'
    ) {
      init();
    }
  }, []);

  useEffect(() => {
    async function getData() {
      if (coinbase) {
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

        const pastGovActivity = await gov.getPastGovernanceActivity(coinbase);

        const activitiesReq = await getPastActivities(
          gov.kosu,
          coinbase.toLowerCase(),
        );

        dispatch({
          type: 'set',
          target: 'activities',
          value: activitiesReq,
        });

        const ordersReq = await axios.get(
          `https://orders-api.kosu.io/orders?makerAddress=${coinbase}`,
        );

        dispatch({
          type: 'set',
          target: 'orders',
          value: ordersReq.data,
        });

        const currentProposals = await gov.currentProposals();
        const formattedProposals = [];

        for (let i = 0; i < Object.keys(currentProposals).length; i += 1) {
          const { dailyReward } = currentProposals[Object.keys(currentProposals)[i]];

          const formattedDailyReward = dailyReward.toString().split('.');

          formattedProposals.push({
            id: Object.keys(currentProposals)[i],
            owner: currentProposals[Object.keys(currentProposals)[i]].owner,
            stakeSize: gov.web3.utils.fromWei(
              currentProposals[Object.keys(currentProposals)[i]].stakeSize.toString(),
            ),
            dailyReward: gov.web3.utils.fromWei(
              formattedDailyReward[0],
            ),
            power: currentProposals[Object.keys(currentProposals)[i]].power.toString(),
            acceptUnix: currentProposals[Object.keys(currentProposals)[i]].acceptUnix,
          });
        }

        dispatch({
          type: 'set',
          target: 'proposals',
          value: formattedProposals.filter(proposal => proposal.acceptUnix > Math.floor(Date.now() / 1000)),
        });

        const currentValidators = await gov.currentValidators();
        const formattedValidators = [];

        for (let i = 0; i < Object.keys(currentValidators).length; i += 1) {
          const { dailyReward } = currentValidators[Object.keys(currentValidators)[i]];
          const formattedDailyReward = dailyReward.toString().split('.');

          formattedValidators.push({
            id: Object.keys(currentValidators)[i],
            owner: currentValidators[Object.keys(currentValidators)[i]].owner,
            details: currentValidators[Object.keys(currentValidators)[i]].details,
            confirmationUnix: currentValidators[Object.keys(currentValidators)[i]].confirmationUnix,
            dailyReward: gov.web3.utils.fromWei(
              formattedDailyReward[0],
            ),
            power: currentValidators[Object.keys(currentValidators)[i]].power.toString(),
            stakeSize: gov.web3.utils.fromWei(
              currentValidators[Object.keys(currentValidators)[i]].stakeSize.toString(),
            ),
          });
        }

        dispatch({
          type: 'set',
          target: 'validators',
          value: formattedValidators,
        });

        const currentChallenges = await gov.currentChallenges();
        const formattedActiveChallenges = [];

        for (let i = 0; i < Object.keys(currentChallenges).length; i += 1) {
          formattedActiveChallenges.push({
            validatorPublicKey: Object.keys(currentChallenges)[i],
            id: currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString(),
            challengeType: currentChallenges[Object.keys(currentChallenges)[i]].challengeType,
            challengeDetails: currentChallenges[Object.keys(currentChallenges)[i]].challengeDetails,
            listingOwner: currentChallenges[Object.keys(currentChallenges)[i]].listingOwner,
            challenger: currentChallenges[Object.keys(currentChallenges)[i]].challenger,
            challengeEndUnix: currentChallenges[Object.keys(currentChallenges)[i]].challengeEndUnix,
            challengeEnd: currentChallenges[Object.keys(currentChallenges)[i]].challengeEnd.toString(),
            challengerStake: gov.web3.utils.fromWei(
              currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.toString(),
            ),
            potentialReward: gov.web3.utils.fromWei(
              currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.multipliedBy(gov.web3.utils.toBN(30)).div(gov.web3.utils.toBN(100)).toString(),
            ),
          });
        }

        dispatch({
          type: 'set',
          target: 'activeChallenges',
          value: formattedActiveChallenges.filter(challenge => challenge.acceptUnix > Math.floor(Date.now() / 1000)),
        });

        const pastChallengesRes = await gov.getHistoricalChallenges();
        const formattedPastChallenges = [];

        for (let i = 0; i < pastChallengesRes.length; i += 1) {
          formattedPastChallenges.push({
            id: i,
            challenger: pastChallengesRes[i].challenger,
            status: pastChallengesRes[i].listingSnapshot.status,
            result: pastChallengesRes[i].passed,
            stakedBalance: gov.web3.utils.fromWei(
              pastChallengesRes[i].listingSnapshot.stakedBalance.plus(pastChallengesRes[i].balance).toString(),
            ),
            challengeEnd: await gov.getPastBlockTimestamp(
              pastChallengesRes[i].challengeEnd.toNumber(),
            ),
          });
        }

        dispatch({
          type: 'set',
          target: 'pastChallenges',
          value: formattedPastChallenges,
        });
      }
    }

    getData();
  }, [coinbase]);

  return <App />;
}

export default GovDataLoader;
