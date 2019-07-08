import React, {
  useState,
  useContext,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import HomeView from './components/homeView';

function Home() {
  const gov = useContext(GovContext);

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [proposals, setProposals] = useState([]);
  const [validators, setValidators] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [pastChallenges, setPastChallenges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (gov) {
        console.log(gov);

        setIsMetaMaskConnected(true);
        // setProposals(gov.currentProposals());
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
