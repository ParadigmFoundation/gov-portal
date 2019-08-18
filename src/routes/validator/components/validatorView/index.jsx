import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import SimpleCardFooter from '../../../../components/simpleCard/components/simpleCardFooter';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import Link from '../../../../components/link';

import ValidatorChallengeModal from '../validatorChallengeModal';

import {
  timestampToCountdown,
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function ValidatorView(props) {
  const {
    validatorName,
    owner,
    id,
    stakeSize,
    monthlyReward,
    votingPower,
    uptime,
    rank,
    blockNumber,
    confirmationUnix,
    challenge,
    challengeLink,
    status,
  } = props;

  const [isValidatorChallengeModalOpen, toggleValidatorChallengeModal] = useState(false);
  const formattedAge = timestampToCountdown(confirmationUnix, true);

  function returnAction() {
    if (status === 'alreadyChallenged') {
      return (
        <div className="validator-view__already-challenged-label">
          {`You've already challenged ${validatorName}. View your challenge`}
          {' '}
          <a href={challengeLink} className="validator-view__already-challenged-link">
            here
          </a>
          .
        </div>
      );
    }

    if (status === 'ongoing') {
      return (
        <div className="validator-view__already-challenged-label">
          There is an ongoing challenge already open against validator.
          <br />
          View the challenge
          {' '}
          <a href={challengeLink} className="validator-view__already-challenged-link">
            here
          </a>
          .
        </div>
      );
    }

    return (
      <Button
        color="red"
        action={() => toggleValidatorChallengeModal(!isValidatorChallengeModalOpen)}
        text={`Challenge ${shortenAddress(owner)}`}
      />
    );
  }

  return (
    <>
      <ValidatorChallengeModal
        isOpen={isValidatorChallengeModalOpen}
        close={() => toggleValidatorChallengeModal(!isValidatorChallengeModalOpen)}
        price="0"
      />
      <div className="validator-view">
        <Row>
          <Col>
            <div className="validator-view__header">
              Validator
            </div>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col>
            <div className="validator-view__address">
              {shortenAddress(owner)}
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="validator-view__validator-label">
              Validator&apos;s public key:
            </div>
            <div className="validator-view__validator-public-key">
              {id}
            </div>
            <div className="validator-view__link-label">
              View on
              {' '}
              <a href={`https://etherscan.io/address/${owner}`} className="validator-view__link">
                Etherscan
              </a>
              .
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Tokens staked
              </SimpleCardTitle>
              <SimpleCardContent>
                {stakeSize}
              </SimpleCardContent>
              <SimpleCardFooter>
                <KosuSymbol />
              </SimpleCardFooter>
            </SimpleCard>
          </Col>
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Monthly reward
              </SimpleCardTitle>
              <SimpleCardContent>
                {monthlyReward}
              </SimpleCardContent>
              <SimpleCardFooter>
                <KosuSymbol />
              </SimpleCardFooter>
            </SimpleCard>
          </Col>
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Voting power
              </SimpleCardTitle>
              <SimpleCardContent>
                {`${votingPower}%`}
              </SimpleCardContent>
            </SimpleCard>
          </Col>
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Uptime
              </SimpleCardTitle>
              <SimpleCardContent>
                {`${uptime}%`}
              </SimpleCardContent>
            </SimpleCard>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Rank
              </SimpleCardTitle>
              <SimpleCardContent>
                {rank}
                <span className="validator-view__rank-th-label">
                  th
                </span>
                {' '}
                <span className="validator-view__rank-label">
                  of 99
                </span>
              </SimpleCardContent>
            </SimpleCard>
          </Col>
          <Col xs={12} sm={3}>
            <SimpleCard>
              <SimpleCardTitle>
                Age
              </SimpleCardTitle>
              <SimpleCardContent>
                {blockNumber}
                {' '}
                <span className="validator-view__age-block-label">
                  Blocks
                </span>
                <br />
                <div className="validator-view__formatted-age">
                  {formattedAge}
                </div>
              </SimpleCardContent>
            </SimpleCard>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            {returnAction()}
          </Col>
        </Row>
        <Row>
          <Col>
            <Link
              to="/"
              color="inverted"
              text="Go back"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

ValidatorView.propTypes = {
  validatorName: PropTypes.string,
  owner: PropTypes.string,
  id: PropTypes.string,
  stakeSize: PropTypes.string,
  monthlyReward: PropTypes.string,
  votingPower: PropTypes.string,
  uptime: PropTypes.number,
  rank: PropTypes.number,
  blockNumber: PropTypes.number,
  confirmationUnix: PropTypes.number,
  challenge: PropTypes.func,
  challengeLink: PropTypes.string,
  status: PropTypes.string,
};

ValidatorView.defaultProps = {
  owner: '0',
  validatorName: '',
  challenge: () => {},
  status: '',
  challengeLink: '',
  id: '0x0',
  stakeSize: '0',
  monthlyReward: '0',
  votingPower: '0',
  confirmationUnix: Date.now() / 1000,
  blockNumber: 0,
  uptime: 0,
  rank: 0,
};

export default ValidatorView;
