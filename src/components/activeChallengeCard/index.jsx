import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import DetailedCard from '../detailedCard';

import {
  shortenAddress,
} from '../../utils/formatting';

import './index.scss';

function ActiveChallengeCard(props) {
  const {
    id,
    listingOwner,
    challenger,
    challengeEndUnix,
    challengerStake,
    potentialReward,
  } = props;

  return (
    <DetailedCard
      id={id}
      type="challenge"
      acceptUnix={challengeEndUnix}
      className="active-challenge-card"
    >
      <Row className="pb-4 align-items-center">
        <Col>
          <div className="active-challenge-card__content">
            {shortenAddress(challenger)}
            {' '}
            is challenging
            {' '}
            {`${shortenAddress(listingOwner)}'s`}
            {' '}
            proposal
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <div className="active-challenge-card__info-label">
            Challenger stake:
            {' '}
            <span className="active-challenge-card__info-amount">
              {challengerStake}
            </span>
          </div>
          <div className="active-challenge-card__info-label">
            Potential reward:
            {' '}
            <span className="active-challenge-card__info-amount">
              {potentialReward}
            </span>
          </div>
        </Col>
      </Row>
    </DetailedCard>
  );
}

ActiveChallengeCard.propTypes = {
  id: PropTypes.string.isRequired,
  listingOwner: PropTypes.string.isRequired,
  challenger: PropTypes.string.isRequired,
  challengeEndUnix: PropTypes.number.isRequired,
  challengerStake: PropTypes.string.isRequired,
  potentialReward: PropTypes.string.isRequired,
};

export default ActiveChallengeCard;
