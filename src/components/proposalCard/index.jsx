import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

function ProposalCard(props) {
  return (
    <Card className="proposal-card">
      <CardBody>
        <Row className="pb-4">
          <Col>
            <div className="proposal-card__header">
              0x8976003…01000000
            </div>
          </Col>
          <Col xs="3">
            <div className="proposal-card__status--new">
              New Proposal
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="proposal-card__content">
              0x1234…6789 wants to become a validator.
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="proposal-card__info-label">
              Stake size:
              {' '}
              <span className="proposal-card__info-amount">
                26,000
              </span>
            </div>
            <div className="proposal-card__info-label">
              Daily reward:
              {' '}
              <span className="proposal-card__info-amount">
                2,234
              </span>
            </div>
            <div className="proposal-card__info-label">
              Estimated vote power:
              {' '}
              <span className="proposal-card__info-amount">
                12%
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="proposal-card__info-label">
              Proposal ends in:
            </div>
            <div className="proposal-card__info-amount">
              01d : 04h : 45m
            </div>
          </Col>
          <Col>
            View
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ProposalCard;
