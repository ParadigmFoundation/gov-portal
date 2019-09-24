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
    const challenges = activeChallenges;

    const nRows = Math.ceil(challenges.length / 3);

    const content = [];

    for (let i = 0; i < nRows; i += 1) {
      const id = i * 3;

      const data = challenges.slice(id, id + 3);
      const cols = [];

      for (let j = 0; j < data.length; j += 1) {
        cols.push(
          <Col key={data[j].id} xs={12} sm={12} md={4} className="py-3">
            <ActiveChallengeCard
              key={data[j].id}
              id={data[j].id}
              challengeType={data[j].challengeType}
              listingOwner={data[j].listingOwner}
              challenger={data[j].challenger}
              challengeEndUnix={data[j].challengeEndUnix}
              challengerStake={numeral(data[j].challengerStake).format('0,0.0')}
              potentialReward={numeral(data[j].potentialReward).format('0,0.0')}
            />
          </Col>,
        );
      }

      content.push(
        <Row key={`c${i}`}>
          {cols}
        </Row>,
      );
    }

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
