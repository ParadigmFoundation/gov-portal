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

function ChallengeView(props) {
  const {
    challengeId,
    validatorPublicKey,
    address,
    address2,
    deadline,
    potentialReward,
    challengerStake,
    keepProposal,
    removeProposal,
    reveal,
    voteAgain,
    addToCalendar,
    goBack,
    status,
  } = props;

  const shortAddress = `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}`;
  const shortAddress2 = `${address2.substring(0, 8)}...${address2.substring(address2.length - 8, address2.length)}`;

  const countdown = timestampToCountdown(deadline, true);

  function returnStatus() {
    if (status === 'vote') {
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
          Remeber to reveal your vote here when the challenge ends.
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
    <div>
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
              {shortAddress}
            </span>
            {' '}
            is challenging
            {' '}
            <span className="challenge-view__address">
              {`${shortAddress2}'s`}
            </span>
            {' '}
            proposal.
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="challenge-view__subcontent">
            Entity y believes that validator x did something bad. This is meant to be a 2-5 line description.
          </div>
          <div className="challenge-view__subcontent">
            This challenge will end in
            {' '}
            <span className="challenge-view__subcontent-deadline">
              {countdown}
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

ChallengeView.propTypes = {
  challengeId: PropTypes.number.isRequired,
  validatorPublicKey: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  deadline: PropTypes.number.isRequired,
  potentialReward: PropTypes.number.isRequired,
  challengerStake: PropTypes.number.isRequired,
  keepProposal: PropTypes.func,
  removeProposal: PropTypes.func,
  reveal: PropTypes.func,
  voteAgain: PropTypes.func,
  addToCalendar: PropTypes.func,
  goBack: PropTypes.func.isRequired,
  status: PropTypes.string,
};

ChallengeView.defaultProps = {
  status: '',
  keepProposal: () => {},
  removeProposal: () => {},
  reveal: () => {},
  voteAgain: () => {},
  addToCalendar: () => {},
};

export default ChallengeView;
