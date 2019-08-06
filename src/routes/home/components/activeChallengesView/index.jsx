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
      key={activeChallenge.id}
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
  metaMaskConnected: PropTypes.bool,
  activeChallenges: PropTypes.arrayOf(PropTypes.object),
};

ActiveChallengesView.defaultProps = {
  metaMaskConnected: false,
  activeChallenges: [],
};

export default ActiveChallengesView;
