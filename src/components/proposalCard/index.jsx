import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

import Button from '../button';

function ProposalCard(props) {
  const {
    hash,
    address,
    stakeSize,
    dailyReward,
    estimatedVotePower,
    timestamp,
  } = props;

  return (
    <Card className="proposal-card">
      <CardBody>
        <Row className="pb-4 align-items-center">
          <Col>
            <div className="proposal-card__header">
              {hash}
            </div>
          </Col>
          <Col xs="3">
            <div className="proposal-card__status--new">
              New Proposal
            </div>
          </Col>
        </Row>
        <Row className="pb-4 align-items-center">
          <Col>
            <div className="proposal-card__content">
              {`${address} wants to become a validator.`}
            </div>
          </Col>
        </Row>
        <Row className="pb-4 align-items-center">
          <Col>
            <div className="proposal-card__info-label">
              Stake size:
              {' '}
              <span className="proposal-card__info-amount">
                {stakeSize}
              </span>
            </div>
            <div className="proposal-card__info-label">
              Daily reward:
              {' '}
              <span className="proposal-card__info-amount">
                {dailyReward}
              </span>
            </div>
            <div className="proposal-card__info-label">
              Estimated vote power:
              {' '}
              <span className="proposal-card__info-amount">
                {`${estimatedVotePower}%`}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <div className="proposal-card__info-label">
              Proposal ends in:
            </div>
            <div className="proposal-card__info-amount">
              {timestamp}
            </div>
          </Col>
          <Col className="text-right">
            <Button text="View" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

ProposalCard.propTypes = {
  hash: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  stakeSize: PropTypes.number.isRequired,
  dailyReward: PropTypes.number.isRequired,
  estimatedVotePower: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default ProposalCard;
