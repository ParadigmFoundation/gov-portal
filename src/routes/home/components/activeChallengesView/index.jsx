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
    const length = activeChallenges.length - (activeChallenges.length % 3);

    const content = [];

    for (let i = 0; i < length; i += 3) {
      const cols = [];

      for (let j = 0; j < 3; j += 1) {
        cols.push(
          <Col key={i + j} xs={12} sm={12} md={4} className="py-3">
            <ActiveChallengeCard
              key={activeChallenges[i + j].id}
              id={activeChallenges[i + j].id}
              challengeType={activeChallenges[i + j].challengeType}
              listingOwner={activeChallenges[i + j].listingOwner}
              challenger={activeChallenges[i + j].challenger}
              challengeEndUnix={activeChallenges[i + j].challengeEndUnix}
              challengerStake={numeral(activeChallenges[i + j].challengerStake).format('0,0.0')}
              potentialReward={numeral(activeChallenges[i + j].potentialReward).format('0,0.0')}
            />
          </Col>,
        );
      }

      content.push(
        <Row key="ce">
          {cols}
        </Row>,
      );
    }

    const lastLength = activeChallenges.length - length;
    const cols = [];

    for (let i = 0; i < lastLength; i += 1) {
      cols.push(
        <Col key={i} xs={12} sm={12} md={4} className="py-3">
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

    content.push(
      <Row key="cle">
        {cols}
      </Row>,
    );

    return content;
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
