import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';
import numeral from 'numeral';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import Link from '../../../../components/link';

import {
  timestampToCountdown,
  shortenAddress,
} from '../../../../utils/formatting';

import ProposalChallengeModal from '../proposalChallengeModal';

import './index.scss';

function ProposalView(props) {
  const {
    id,
    owner,
    acceptUnix,
    stakeSize,
    power,
    dailyReward,
    challengeProposal,
    canBeChallenged,
  } = props;

  const [isProposalChallengeModalOpen, toggleProposalChallengeModal] = useState();

  return (
    <div className="proposal-view">
      <ProposalChallengeModal
        id={id}
        isOpen={isProposalChallengeModalOpen}
        close={() => toggleProposalChallengeModal(false)}
        price={stakeSize}
        challengeProposal={challengeProposal}
      />
      <Row className="pb-5">
        <Col>
          <div className="proposal-view__title">
            Proposal
          </div>
          <div className="proposal-view__tendermint-label">
            Tendermint public key:
          </div>
          <div className="proposal-view__tendermint">
            {shortenAddress(id)}
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="proposal-view__content">
            <span className="proposal-view__address">
              {shortenAddress(owner)}
            </span>
            {' '}
            wants to become a validator.
          </div>
          <div className="proposal-view__subcontent">
            {`If unchallenged, ${shortenAddress(owner)} will become a validator in`}
            {' '}
            <span className="proposal-view__subcontent-deadline">
              {timestampToCountdown(acceptUnix, true)}
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
              {numeral(stakeSize).format('0,0.0')}
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
              {numeral(dailyReward).format('0,0.0')}
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
              {`${numeral(power).format('0.0')}%`}
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
                action={() => toggleProposalChallengeModal(true)}
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
          <Link
            text="Go Back"
            to="/"
            color="inverted"
          />
        </Col>
      </Row>
    </div>

  );
}

ProposalView.propTypes = {
  id: PropTypes.string,
  owner: PropTypes.string,
  acceptUnix: PropTypes.number,
  stakeSize: PropTypes.string,
  power: PropTypes.string,
  dailyReward: PropTypes.string,
  challengeProposal: PropTypes.func,
  canBeChallenged: PropTypes.bool,
  details: PropTypes.string,
};

ProposalView.defaultProps = {
  id: '',
  owner: '0',
  acceptUnix: Date.now() / 1000,
  stakeSize: '0',
  power: '0',
  dailyReward: '0',
  challengeProposal: () => {},
  canBeChallenged: true,
  details: '',
};

export default ProposalView;
