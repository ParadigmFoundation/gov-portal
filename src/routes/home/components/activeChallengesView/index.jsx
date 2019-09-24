import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Row,
  Col,
} from 'reactstrap';

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

  function returnActiveChallenges() {
    const cols = [];

    for (let i = 0; i < activeChallenges.length; i += 1) {
      cols.push(
        <Col key={activeChallenges[i].id} xs={12} sm={12} md={6} lg={4} className="py-3">
          <ActiveChallengeCard
            key={activeChallenges[i].id}
            id={activeChallenges[i].id}
            challengeType={activeChallenges[i].challengeType}
            listingOwner={activeChallenges[i].listingOwner}
            challenger={activeChallenges[i].challenger}
            challengeEndUnix={activeChallenges[i].challengeEndUnix}
            challengerStake={numeral(activeChallenges[i].challengerStake).format('0,0.0')}
            potentialReward={numeral(activeChallenges[i].potentialReward).format('0,0.0')}
          />
        </Col>,
      );
    }

    return (
      <Row>
        {cols}
      </Row>
    );
  }

  return returnActiveChallenges();
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
