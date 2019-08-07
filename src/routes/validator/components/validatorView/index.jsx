import React from 'react';
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

import {
  timestampToCountdown,
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function ValidatorView(props) {
  const {
    validatorName,
    owner,
    validatorPublicKey,
    etherscanLink,
    tokensStaked,
    monthlyReward,
    votingPower,
    uptime,
    rank,
    blockNumber,
    confirmationUnix,
    challenge,
    challengeLink,
    goBack,
    status,
  } = props;

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
        action={challenge}
        text={`Challenge ${shortenAddress(owner)}`}
      />
    );
  }

  return (
    <div>
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
            {validatorPublicKey}
          </div>
          <div className="validator-view__link-label">
            View on
            {' '}
            <a href={etherscanLink} className="validator-view__link">
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
              {tokensStaked}
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
          <Button
            color="inverted"
            action={goBack}
            text="Go back"
          />
        </Col>
      </Row>
    </div>
  );
}

ValidatorView.propTypes = {
  validatorName: PropTypes.string,
  owner: PropTypes.string,
  validatorPublicKey: PropTypes.string.isRequired,
  etherscanLink: PropTypes.string.isRequired,
  tokensStaked: PropTypes.string.isRequired,
  monthlyReward: PropTypes.number.isRequired,
  votingPower: PropTypes.number.isRequired,
  uptime: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  blockNumber: PropTypes.number.isRequired,
  confirmationUnix: PropTypes.number.isRequired,
  challenge: PropTypes.func,
  challengeLink: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  status: PropTypes.string,
};

ValidatorView.defaultProps = {
  owner: '0x0',
  validatorName: '',
  challenge: () => {},
  status: '',
  challengeLink: '',
};

export default ValidatorView;
