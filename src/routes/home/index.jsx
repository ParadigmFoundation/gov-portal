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

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [proposals, setProposals] = useState([]);
  const [validators, setValidators] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [pastChallenges, setPastChallenges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (isReady) {
        setIsMetaMaskConnected(true);
        // setProposals(gov.currentProposals());

        const formattedValidators = [];
        const currentValidators = await gov.currentValidators();
      }
    }

    fetchData();
  }, [gov]);

  return (
    <div>
      <HomeView
        metaMaskConnected={isMetaMaskConnected}
        proposals={proposals}
        validators={validators}
        activeChallenges={activeChallenges}
        pastChallenges={pastChallenges}
      />
    </div>
  );
}

export default Home;
