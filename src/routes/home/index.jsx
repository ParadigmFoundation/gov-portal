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

  function compareProposals(a, b) {
    const unixA = a.acceptUnix;
    const unixB = b.acceptUnix;

    return unixB - unixA;
  }

  function compareChallenges(a, b) {
    const unixA = a.id;
    const unixB = b.id;

    return unixB - unixA;
  }

  return (
    <div>
      <HomeView
        metaMaskConnected={isReady}
        proposals={proposals.sort(compareProposals)}
        validators={validators}
        activeChallenges={activeChallenges.sort(compareChallenges)}
        pastChallenges={pastChallenges}
      />
    </div>
  );
}

export default Home;
