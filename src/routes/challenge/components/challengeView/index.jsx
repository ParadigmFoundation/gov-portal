import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import Link from '../../../../components/link';

import {
  timestampToCountdown,
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function ChallengeView(props) {
  const {
    challengeId,
    validatorPublicKey,
    listingOwner,
    challenger,
    challengeEndUnix,
    potentialReward,
    challengerStake,
    keepProposal,
    removeProposal,
    reveal,
    voteAgain,
    addToCalendar,
    challengeDetails,
    info,
    blockNumber,
  } = props;

  function returnStatus() {
    let status;

    if (info.challengeStart <= blockNumber && blockNumber < info.endCommitPeriod) {
      status = 'commit';
    } else if (info.endCommitPeriod <= blockNumber && blockNumber < info.challengeEnd) {
      status = 'reveal';
    } else if (info.challengeEnd <= blockNumber) {
      status = 'over';
    }

    if (status === 'commit') {
      return (
        <div>
          <div className="challenge-view__challenge-label">
            Vote on this challenge
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
            text="Vote to keep proposal"
            action={keepProposal}
            color="green"
          />
          {' '}
          <Button
            text="Vote to remove proposal"
            action={removeProposal}
            color="red"
          />
        </div>
      );
    }

    if (status === 'reveal') {
      return (
        <div>
          <div className="challenge-view__challenge-label">
            Reveal your vote
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
            text="Reveal"
            action={reveal}
            color="green"
          />
        </div>
      );
    }

    if (status === 'alreadyVoted') {
      return (
        <div>
          <div className="challenge-view__voted-label">
            You have already voted on this challenge.
            <br />
            <span
              className="challenge-view__text-action"
              onClick={voteAgain}
              role="button"
              tabIndex="0"
              onKeyDown={voteAgain}
            >
              Click here
            </span>
            {' '}
            to vote again.
          </div>
        </div>
      );
    }

    if (status === 'youStarted') {
      return (
        <div>
          <div className="challenge-view__started-label">
            You started this challenge.
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="challenge-view__voted-label">
          Thanks for voting.
          <br />
          Remember to reveal your vote here when the challenge ends.
          <br />
          Add a reminder to your
          {' '}
          <span
            className="challenge-view__text-action"
            onClick={addToCalendar}
            tabIndex="-1"
            role="button"
            onKeyDown={addToCalendar}
          >
            Google Calendar
          </span>
          .
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-view">
      <Row className="pb-5">
        <Col>
          <div className="challenge-view__title">
            {`Challenge #${challengeId}`}
          </div>
          <div className="challenge-view__public-key-label">
            Validator&apos;s public key:
          </div>
          <div className="challenge-view__public-key">
            {validatorPublicKey}
          </div>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col>
          <div className="challenge-view__content">
            <span className="challenge-view__address">
              {shortenAddress(challenger)}
            </span>
            {' '}
            is challenging
            {' '}
            <span className="challenge-view__address">
              {`${shortenAddress(listingOwner)}'s`}
            </span>
            {' '}
            proposal.
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="challenge-view__subcontent">
            {challengeDetails}
          </div>
          <div className="challenge-view__subcontent">
            This challenge will end in
            {' '}
            <span className="challenge-view__subcontent-deadline">
              {timestampToCountdown(challengeEndUnix, true)}
            </span>
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs="12" sm="4">
          <div className="challenge-view__card">
            <div className="challenge-view__card-title">
              Potential reward
            </div>
            <div className="challenge-view__card-content">
              {potentialReward}
            </div>
            <div className="challenge-view__card-footer">
              <KosuSymbol />
            </div>
          </div>
        </Col>
        <Col xs="12" sm="4">
          <div className="challenge-view__card">
            <div className="challenge-view__card-title">
              Challenger stake
            </div>
            <div className="challenge-view__card-content">
              {challengerStake}
            </div>
            <div className="challenge-view__card-footer">
              <KosuSymbol />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          {returnStatus()}
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

ChallengeView.propTypes = {
  challengeId: PropTypes.string,
  validatorPublicKey: PropTypes.string,
  listingOwner: PropTypes.string,
  challenger: PropTypes.string,
  challengeEndUnix: PropTypes.number,
  potentialReward: PropTypes.string,
  challengerStake: PropTypes.string,
  keepProposal: PropTypes.func,
  removeProposal: PropTypes.func,
  reveal: PropTypes.func,
  voteAgain: PropTypes.func,
  addToCalendar: PropTypes.func,
  challengeDetails: PropTypes.string,
  info: PropTypes.shape({
    challengeStart: PropTypes.number,
    endCommitPeriod: PropTypes.number,
    challengeEnd: PropTypes.number,
  }),
  blockNumber: PropTypes.number,
};

ChallengeView.defaultProps = {
  challengeId: '0',
  validatorPublicKey: '',
  listingOwner: '0x0...',
  challenger: '0x0...',
  challengeEndUnix: Date.now() / 1000,
  potentialReward: '0',
  challengerStake: '0',
  challengeDetails: '',
  info: {
    challengeStart: 0,
    endCommitPeriod: 0,
    challengeEnd: 0,
  },
  blockNumber: 0,
  keepProposal: () => {},
  removeProposal: () => {},
  reveal: () => {},
  voteAgain: () => {},
  addToCalendar: () => {},
};

export default ChallengeView;
