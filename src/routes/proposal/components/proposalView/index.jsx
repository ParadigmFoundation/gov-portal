import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

import './index.scss';

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
    canBeChallenged,
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
          {canBeChallenged ? (
            <div>
              <div className="proposal-view__challenge-label">
                Challenge
                {' '}
                <span>
                  <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="View-Proposal-Wallet-Connected-Copy" transform="translate(-232.000000, -653.000000)">
                        <rect fill="#FFFFFF" x="0" y="0" width="1440" height="900" />
                        <g id="?-copy" transform="translate(232.000000, 653.000000)">
                          <g id="Group">
                            <circle id="Oval" fill="#838383" cx="6" cy="6" r="6" />
                            <path d="M5.255,7.745 C5.255,5.974 7.279,5.589 7.279,4.28 C7.279,3.51 6.685,3.147 5.915,3.147 C5.178,3.147 4.595,3.488 4.364,4.214 L3.495,3.73 C3.88,2.663 4.87,2.157 5.926,2.157 C7.147,2.157 8.302,2.861 8.302,4.236 C8.302,5.93 6.278,6.348 6.278,7.745 L5.255,7.745 Z M5.761,10.121 C5.365,10.121 5.046,9.802 5.046,9.406 C5.046,9.01 5.365,8.691 5.761,8.691 C6.168,8.691 6.476,9.01 6.476,9.406 C6.476,9.802 6.168,10.121 5.761,10.121 Z" id="?" fill="#FFFFFF" fillRule="nonzero" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <Button
                text="Challenge proposal"
                action={challengeProposal}
                color="red"
              />
            </div>
          ) : (
            <div className="proposal-view__already-challenged-label">
              Someone has already challenged this proposal.
              <br />
              View the challenge
              {' '}
              <a href="/" className="proposal-view__challenge-link">
                here
              </a>
              .
            </div>
          )}
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
  canBeChallenged: PropTypes.bool,
};

ProposalView.defaultProps = {
  canBeChallenged: false,
};

export default ProposalView;
