import React from 'react';
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
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function ChallengeView(props) {
  const {
    currentUser,
    challengeId,
    challengeType,
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

  console.log('props=%o', props);

  function returnStatus() {
    let status;

    console.log('got info=%o, block=%s', info, blockNumber);

    if (info.challengeStart <= blockNumber && blockNumber < info.endCommitPeriod) {
      status = 'commit';
    } else if (info.endCommitPeriod <= blockNumber && blockNumber < info.challengeEnd) {
      status = 'reveal';
    } else if (info.challengeEnd >= blockNumber) {
      status = 'over';
    }

    console.log(status);

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
            <Tooltip
              text={tooltipsJson.revealVote}
            />
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
              {shortenAddress(challenger)}
            </span>
            {' '}
            is challenging
            {' '}
            <span className="challenge-view__address">
              {`${shortenAddress(listingOwner)}`}
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
              <Tooltip
                text={tooltipsJson.potentialReward}
              />
            </div>
            <div className="challenge-view__card-content">
              {numeral(potentialReward).format('0,0.0')}
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
              {numeral(challengerStake).format('0,0.0')}
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
  );
}

ChallengeView.propTypes = {
  currentUser: PropTypes.string,
  challengeId: PropTypes.string,
  challengeType: PropTypes.string,
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
  currentUser: '0',
  challengeId: '0',
  challengeType: 'proposal',
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
