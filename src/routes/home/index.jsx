/**
 * Handle the logic behind the homepage
 */

import React, {
  useState,
  useContext,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import HomeView from './components/homeView';

function Home() {
  const {
    gov,
    isReady,
  } = useContext(GovContext);

  document.title('Governance | Paradigm');

  const [proposals, setProposals] = useState([]);
  const [validators, setValidators] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [pastChallenges, setPastChallenges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (isReady) {
        console.log(gov);

        const currentProposals = await gov.currentProposals();
        const formattedProposals = [];

        for (let i = 0; i < Object.keys(currentProposals).length; i += 1) {
          formattedProposals.push({
            id: Object.keys(currentProposals)[i],
            owner: currentProposals[Object.keys(currentProposals)[i]].owner,
            stakeSize: gov.web3.utils.fromWei(
              currentProposals[Object.keys(currentProposals)[i]].stakeSize.toString(),
            ),
            dailyReward: gov.web3.utils.fromWei(
              currentProposals[Object.keys(currentProposals)[i]].dailyReward.toString(),
            ),
            power: currentProposals[Object.keys(currentProposals)[i]].power.toString(),
            acceptUnix: currentProposals[Object.keys(currentProposals)[i]].acceptUnix,
          });
        }

        setProposals(formattedProposals);

        const currentValidators = await gov.currentValidators();
        const formattedValidators = [];

        for (let i = 0; i < Object.keys(currentValidators).length; i += 1) {
          formattedValidators.push({
            id: Object.keys(currentValidators)[i],
            owner: currentValidators[Object.keys(currentValidators)[i]].owner,
            confirmationUnix: currentValidators[Object.keys(currentValidators)[i]].confirmationUnix,
            dailyReward: gov.web3.utils.fromWei(
              currentValidators[Object.keys(currentValidators)[i]].dailyReward.toString(),
            ),
            power: currentValidators[Object.keys(currentValidators)[i]].power.toString(),
            stakeSize: gov.web3.utils.fromWei(
              currentValidators[Object.keys(currentValidators)[i]].stakeSize.toString(),
            ),
          });
        }

        setValidators(formattedValidators);

        const currentChallenges = await gov.currentChallenges();
        const formattedActiveChallenges = [];

        for (let i = 0; i < Object.keys(currentChallenges).length; i += 1) {
          formattedActiveChallenges.push({
            id: currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString(),
            challengeType: currentChallenges[Object.keys(currentChallenges)[i]].challengeType,
            listingOwner: currentChallenges[Object.keys(currentChallenges)[i]].listingOwner,
            challenger: currentChallenges[Object.keys(currentChallenges)[i]].challenger,
            challengeEndUnix: currentChallenges[Object.keys(currentChallenges)[i]].challengeEndUnix,
            challengerStake: gov.web3.utils.fromWei(
              currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.toString(),
            ),
            potentialReward: gov.web3.utils.fromWei(
              currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.multipliedBy(gov.web3.utils.toBN(30)).div(gov.web3.utils.toBN(100)).toString(),
            ),
          });
        }

        setActiveChallenges(formattedActiveChallenges);

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

        setPastChallenges(formattedPastChallenges);
      }
    }

    fetchData();
  }, [isReady, gov]);

  return (
    <div>
      <HomeView
        metaMaskConnected={isReady}
        proposals={proposals}
        validators={validators}
        activeChallenges={activeChallenges}
        pastChallenges={pastChallenges}
      />
    </div>
  );
}

export default Home;
