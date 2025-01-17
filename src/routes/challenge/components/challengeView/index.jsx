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

import Tooltip from '../../../../components/tooltip';
import tooltipsJson from '../../../../assets/content/tooltips.json';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

import ChallengeModal from '../challengeModal';

import './index.scss';

function ChallengeView(props) {
  const {
    challengeId,
    hasVoted,
    hasRevealedVote,
    challengeType,
    validatorPublicKey,
    listingOwner,
    challenger,
    challengeEndUnix,
    potentialReward,
    challengerStake,
    commitVote,
    revealVote,
    voteAgain,
    challengeDetails,
    info,
    blockNumber,
    startReveal,
    endReveal,
  } = props;

  const [isChallengeModalOpen, toggleChallengeModal] = useState(false);
  const [value, setValue] = useState('');

  function returnStatus() {
    let status;

    if (blockNumber !== 0) {
      if (blockNumber < info.endCommitPeriod && blockNumber >= info.challengeStart) {
        status = 'commit';
      } else if (blockNumber >= info.endCommitPeriod && blockNumber <= info.challengeEnd) {
        status = 'reveal';
      } else {
        status = 'over';
      }

      if (hasVoted && status === 'commit') {
        status = 'thanks';
      }
    }

    if (hasRevealedVote) {
      status = 'hasRevealedVote';
    }

    if (status === 'commit') {
      return (
        <div>
          <div className="challenge-view__challenge-label">
            Vote on this challenge
            {' '}
            <Tooltip
              text={tooltipsJson.voteChallenge}
            />
          </div>
          <Button
            text="Vote to keep proposal"
            action={() => {
              setValue('1');
              toggleChallengeModal(!isChallengeModalOpen);
            }}
            color="green"
          />
          {' '}
          <Button
            text="Vote to remove proposal"
            action={() => {
              setValue('0');
              toggleChallengeModal(!isChallengeModalOpen);
            }}
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
            <Tooltip
              text={tooltipsJson.revealVote}
            />
          </div>
          <Button
            text="Reveal"
            action={revealVote}
            color="green"
            isAsync
          />
        </div>
      );
    }

    if (status === 'hasRevealedVote') {
      return (
        <div>
          <div className="challenge-view__challenge-label">
          You have already revealed your vote.
          </div>
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

    if (status === 'thanks') {
      return (
        <div>
          <div className="challenge-view__voted-label">
            Thanks for voting.
            <br />
            Remember to reveal your vote here when the challenge ends.
            <br />
            Add a reminder to your
            {' '}
            <a
              href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Reveal+vote+on+challenge+%23${challengeId}&details=During+the+reveal+period%2C+you+may+reveal+your+vote+on+this+challenge.+If+you+do+not+reveal+a+vote%2C+you+will+not+be+rewarded+if+you+voted+on+the+winning+side.&location=govern.paradigm.market&dates=${startReveal}%2F${endReveal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="challenge-view__calendar-link"
            >
              Calendar
            </a>
            .
          </div>
        </div>
      );
    }

    if (status === 'over' && !hasVoted) {
      return (
        <div className="challenge-view__voted-label">
          This challenge has ended. You are unable to vote.
        </div>
      );
    }

    if (status === 'over') {
      return (
        <div className="challenge-view__voted-label">
          This challenge is over.
        </div>
      );
    }

    return (
      <div className="challenge-view__voted-label">
        Loading...
      </div>
    );
  }

  return (
    <>
      <ChallengeModal
        isOpen={isChallengeModalOpen}
        address={listingOwner}
        close={() => toggleChallengeModal(!isChallengeModalOpen)}
        commitVote={commitVote}
        challengeId={challengeId}
        value={value}
      />
      <div className="challenge-view container">
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
                {challenger}
              </span>
              {' '}
              is challenging
              {' '}
              <span className="challenge-view__address">
                {`${listingOwner}`}
              </span>
              {challengeType === 'proposal' ? '\'s proposal.' : '.'}
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="challenge-view__subcontent">
              {challengeDetails}
            </div>
            {challengeEndUnix > Math.floor(Date.now() / 1000) ? (
              <div className="challenge-view__subcontent">
                This challenge will end in
                {' '}
                <span className="challenge-view__subcontent-deadline">
                  {timestampToCountdown(challengeEndUnix, true)}
                </span>
              </div>
            ) : (
              <div className="challenge-view__subcontent">
                This challenge has ended.
              </div>
            )}
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs="12" sm="4">
            <div className="challenge-view__card">
              <div className="challenge-view__card-title">
                Potential reward
                <Tooltip
                  text={tooltipsJson.potentialReward}
                />
              </div>
              <div className="challenge-view__card-content">
                {numeral(potentialReward).format('0,0.[00]')}
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
                {numeral(challengerStake).format('0,0.[00]')}
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
              color="cancel"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

ChallengeView.propTypes = {
  challengeId: PropTypes.string,
  challengeType: PropTypes.string,
  validatorPublicKey: PropTypes.string,
  listingOwner: PropTypes.string,
  challenger: PropTypes.string,
  challengeEndUnix: PropTypes.number,
  potentialReward: PropTypes.string,
  challengerStake: PropTypes.string,
  commitVote: PropTypes.func,
  revealVote: PropTypes.func,
  voteAgain: PropTypes.func,
  challengeDetails: PropTypes.string,
  info: PropTypes.shape({
    challengeStart: PropTypes.number,
    endCommitPeriod: PropTypes.number,
    challengeEnd: PropTypes.number,
  }),
  blockNumber: PropTypes.number,
  hasVoted: PropTypes.bool,
  hasRevealedVote: PropTypes.bool,
  startReveal: PropTypes.string,
  endReveal: PropTypes.string,
};

ChallengeView.defaultProps = {
  hasVoted: false,
  hasRevealedVote: false,
  challengeId: '0',
  challengeType: 'proposal',
  validatorPublicKey: '',
  listingOwner: '...',
  challenger: '...',
  challengeEndUnix: Date.now() / 1000,
  potentialReward: '0',
  challengerStake: '0',
  challengeDetails: '...',
  info: {
    challengeStart: 0,
    endCommitPeriod: 0,
    challengeEnd: 0,
  },
  blockNumber: 0,
  startReveal: '0',
  endReveal: '0',
  commitVote: () => {},
  revealVote: () => {},
  voteAgain: () => {},
};

export default ChallengeView;
