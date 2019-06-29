import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

import Button from '../button';

import {
  timestampToCountdown,
} from '../../utils/formatting';

function ProposalCard(props) {
  const {
    tendermint,
    address,
    stakeSize,
    dailyReward,
    estimatedVotePower,
    deadline,
  } = props;

  const shortTendermint = `${tendermint.substring(0, 8)}...${tendermint.substring(tendermint.length - 8, tendermint.length)}`;
  const shortAddress = `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}`;

  const countdown = timestampToCountdown(deadline, true);

  return (
    <Card className="proposal-card">
      <CardBody>
        <Row className="pb-4 align-items-center">
          <Col>
            <div className="proposal-card__header">
              {shortTendermint}
            </div>
          </Col>
          <Col xs="3">
            {deadline - Date.now() > 1000 * 60 * 60 * 24 ? (
              <div className="proposal-card__status--new">
                New Proposal
              </div>
            ) : (
              <div className="proposal-card__status--ending-soon">
                Ending soon
              </div>
            )}
          </Col>
        </Row>
        <Row className="pb-4 align-items-center">
          <Col>
            <div className="proposal-card__content">
              {`${shortAddress} wants to become a validator.`}
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
              {countdown}
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
  tendermint: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  stakeSize: PropTypes.number.isRequired,
  dailyReward: PropTypes.number.isRequired,
  estimatedVotePower: PropTypes.number.isRequired,
  deadline: PropTypes.number.isRequired,
};

export default ProposalCard;
