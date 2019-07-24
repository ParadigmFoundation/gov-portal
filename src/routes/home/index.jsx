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

  const [proposals, setProposals] = useState([]);
  const [validators, setValidators] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [pastChallenges, setPastChallenges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (isReady) {
        console.log(gov);
      }
    }

    fetchData();
  }, [isReady]);

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
