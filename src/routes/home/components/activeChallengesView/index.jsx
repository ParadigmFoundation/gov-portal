import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

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
      challengeType={activeChallenge.challengeType}
      listingOwner={activeChallenge.listingOwner}
      challenger={activeChallenge.challenger}
      challengeEndUnix={activeChallenge.challengeEndUnix}
      challengerStake={numeral(activeChallenge.challengerStake).format('0,0.0')}
      potentialReward={numeral(activeChallenge.potentialReward).format('0,0.0')}
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
