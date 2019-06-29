import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/kosuSymbol';
import Button from '../../../../components/button';

function ProposalView(props) {
  const {
    tendermint,
    address,
    deadline,
    stakeSize,
    estimatedVotePower,
    dailyReward,
    challengeProposal,
    goBack,
  } = props;

  return (
    <div>
      <Row className="pb-5">
        <Col>
          <div className="proposal-view__title">
            Proposal
          </div>
          <div className="proposal-view__tendermint-label">
            Tendermint public key:
          </div>
          <div className="proposal-view__tendermint">
            0x8976003…01000000
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="proposal-view__content">
            <span className="proposal-view__address">
              0x12345...56789
            </span>
            {' '}
            wants to become a validator.
          </div>
          <div className="proposal-view__subcontent">
            If unchallenged, 0x12345...56789 will become a validator on
            {' '}
            <span className="proposal-view__subcontent-deadline">
              01d : 14h : 45m
            </span>
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs="12" sm="4">
          <div className="proposal-view__card">
            <div className="proposal-view__card-title">
              Stake size
            </div>
            <div className="proposal-view__card-content">
              123,983.54
            </div>
            <div className="proposal-view__card-footer">
              <KosuSymbol />
            </div>
          </div>
        </Col>
        <Col xs="12" sm="4">
          <div className="proposal-view__card">
            <div className="proposal-view__card-title">
              Daily reward
            </div>
            <div className="proposal-view__card-content">
              546
            </div>
            <div className="proposal-view__card-footer">
              <KosuSymbol />
            </div>
          </div>
        </Col>
        <Col xs="12" sm="4">
          <div className="proposal-view__card">
            <div className="proposal-view__card-title">
              Estimated vote power
            </div>
            <div className="proposal-view__card-content">
              12%
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <Button
            text="Challenge proposal"
            action={challengeProposal}
            color="red"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            text="Go Back"
            action={goBack}
            color="inverted"
          />
        </Col>
      </Row>
    </div>

  );
}

ProposalView.propTypes = {
  challengeProposal: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ProposalView;
