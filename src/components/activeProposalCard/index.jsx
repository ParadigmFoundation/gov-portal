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

function ActiveProposalCard(props) {
  const {
    id,
    owner,
    stakeSize,
    dailyReward,
    power,
    acceptUnix,
  } = props;

  return (
    <DetailedCard
      id={shortenAddress(id)}
      type="proposal"
      acceptUnix={acceptUnix}
      className="active-proposal-card"
    >
      <Row className="pb-4 align-items-center">
        <Col>
          <div className="active-proposal-card__content">
            {`${shortenAddress(owner)} wants to become a validator.`}
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <div className="active-proposal-card__info-label">
            Stake size:
            {' '}
            <span className="active-proposal-card__info-amount">
              {stakeSize}
            </span>
          </div>
          <div className="active-proposal-card__info-label">
            Daily reward:
            {' '}
            <span className="active-proposal-card__info-amount">
              {dailyReward}
            </span>
          </div>
          <div className="active-proposal-card__info-label">
            Estimated vote power:
            {' '}
            <span className="active-proposal-card__info-amount">
              {`${power}%`}
            </span>
          </div>
        </Col>
      </Row>
    </DetailedCard>
  );
}

ActiveProposalCard.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  stakeSize: PropTypes.string.isRequired,
  dailyReward: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  acceptUnix: PropTypes.number.isRequired,
};

export default ActiveProposalCard;
