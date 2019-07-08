import React from 'react';
import PropTypes from 'prop-types';

import EmptyState from '../../../../components/emptyState';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import ActiveChallengeCard from '../../../../components/activeChallengeCard';

function ActiveChallengesView(props) {
  const {
    metaMaskConnected,
    activeChallenges,
  } = props;

  if (!metaMaskConnected) {
    return <ConnectMetaMask />;
  }

  if (activeChallenges.length === 0) {
    return <EmptyState />;
  }

  return activeChallenges.map(activeChallenge => (
    <ActiveChallengeCard
      id={activeChallenge.id}
      listingOwner={activeChallenge.listingOwner}
      challenger={activeChallenge.challenger}
      challengeEndUnix={activeChallenge.challengeEndUnix}
      challengerStake={activeChallenge.challengerStake}
      potentialReward={activeChallenge.potentialReward}
    />
  ));
}

ActiveChallengesView.propTypes = {
  metaMaskConnected: false,
  activeChallenges: PropTypes.arrayOf(PropTypes.object),
};

ActiveChallengesView.defaultProps = {
  metaMaskConnected: false,
  activeChallenges: [],
};

export default ActiveChallengesView;
