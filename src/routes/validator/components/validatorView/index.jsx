import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import Card from '../../../../components/card';
import CardTitle from '../../../../components/card/components/cardTitle';
import CardContent from '../../../../components/card/components/cardContent';
import CardFooter from '../../../../components/card/components/cardFooter';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

import './index.scss';

function ValidatorView(props) {
  const {
    validatorName,
    validatorAddress,
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
  const shortAddress = `${validatorAddress.substring(0, 8)}...${validatorAddress.substring(validatorAddress.length - 8, validatorAddress.length)}`;

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
        text={`Challenge ${shortAddress}`}
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
            {shortAddress}
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
          <Card>
            <CardTitle>
              Tokens staked
            </CardTitle>
            <CardContent>
              {tokensStaked}
            </CardContent>
            <CardFooter>
              <KosuSymbol />
            </CardFooter>
          </Card>
        </Col>
        <Col xs={12} sm={3}>
          <Card>
            <CardTitle>
              Monthly reward
            </CardTitle>
            <CardContent>
              {monthlyReward}
            </CardContent>
            <CardFooter>
              <KosuSymbol />
            </CardFooter>
          </Card>
        </Col>
        <Col xs={12} sm={3}>
          <Card>
            <CardTitle>
              Voting power
            </CardTitle>
            <CardContent>
              {`${votingPower}%`}
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} sm={3}>
          <Card>
            <CardTitle>
              Uptime
            </CardTitle>
            <CardContent>
              {`${uptime}%`}
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs={12} sm={3}>
          <Card>
            <CardTitle>
              Rank
            </CardTitle>
            <CardContent>
              {rank}
              <span className="validator-view__rank-th-label">
                th
              </span>
              {' '}
              <span className="validator-view__rank-label">
                of 99
              </span>
            </CardContent>
          </Card>
        </Col>
        <Col xs={12} sm={3}>
          <Card>
            <CardTitle>
              Age
            </CardTitle>
            <CardContent>
              {blockNumber}
              {' '}
              <span className="validator-view__age-block-label">
                Blocks
              </span>
              <br />
              <div className="validator-view__formatted-age">
                {formattedAge}
              </div>
            </CardContent>
          </Card>
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
  validatorAddress: PropTypes.string.isRequired,
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
  validatorName: '',
  challenge: () => {},
  status: '',
  challengeLink: '',
};

export default ValidatorView;
