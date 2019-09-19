/**
 * Handle the logic behind the homepage
 */

import React, {
  useContext,
} from 'react';

import GovContext from '../../store/govContext';

import HomeView from './components/homeView';

function Home() {
  const {
    isReady,
    proposals,
    validators,
    activeChallenges,
    pastChallenges,
  } = useContext(GovContext);

  return (
    <div>
      <HomeView
        metaMaskConnected={isReady}
        proposals={proposals.reverse()}
        validators={validators}
        activeChallenges={activeChallenges.reverse()}
        pastChallenges={pastChallenges}
      />
    </div>
  );
}

export default Home;
