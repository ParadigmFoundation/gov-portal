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
import KosuSymbol from '../../../../components/kosuSymbol';
import Button from '../../../../components/button';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

function ValidatorView(props) {
  const {
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
    goBack,
  } = props;

  const formattedAge = timestampToCountdown(confirmationUnix, true);
  const shortAddress = `${validatorAddress.substring(0, 8)}...${validatorAddress.substring(validatorAddress.length - 8, validatorAddress.length)}`;

  return (
    <div>
      <Row>
        <Col>
          <div className="validator-view__header">
            Validator
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="validator-view__validator-label">
            Validator&apos;s public key:
            <br />
            {validatorPublicKey}
          </div>
          <div className="validator-view__validator-label">
            View on
            {' '}
            <a href={etherscanLink} className="validator-view__etherscan-link">
              Etherscan
            </a>
            .
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
          <Card>
            <CardTitle>
              Voting power
            </CardTitle>
            <CardContent>
              {votingPower}
            </CardContent>
          </Card>
        </Col>
        <Col>
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
      <Row>
        <Col>
          <Card>
            <CardTitle>
              Rank
            </CardTitle>
            <CardContent>
              {rank}th of 99
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardTitle>
              Age
            </CardTitle>
            <CardContent>
              {blockNumber} Blocks
              {formattedAge}
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            color="red"
            action={challenge}
            text={`Challenge ${shortAddress}`}
          />
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
  challenge: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ValidatorView;
