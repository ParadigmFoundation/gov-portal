import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/kosuSymbol';
import Button from '../../../../components/button';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

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

  const shortTendermint = `${tendermint.substring(0, 8)}...${tendermint.substring(tendermint.length - 8, tendermint.length)}`;
  const shortAddress = `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}`;

  const countdown = timestampToCountdown(deadline, true);

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
            {shortTendermint}
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="proposal-view__content">
            <span className="proposal-view__address">
              {shortAddress}
            </span>
            {' '}
            wants to become a validator.
          </div>
          <div className="proposal-view__subcontent">
            If unchallenged, 0x12345...56789 will become a validator on
            {' '}
            <span className="proposal-view__subcontent-deadline">
              {countdown}
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
              {stakeSize}
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
              {dailyReward}
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
              {`${estimatedVotePower}%`}
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
  tendermint: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  deadline: PropTypes.number.isRequired,
  stakeSize: PropTypes.number.isRequired,
  estimatedVotePower: PropTypes.number.isRequired,
  dailyReward: PropTypes.number.isRequired,
  challengeProposal: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ProposalView;
