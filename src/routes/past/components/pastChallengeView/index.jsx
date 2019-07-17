import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import ValidatorSymbol from '../../../../components/symbols/validatorSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import ProposalSymbol from '../../../../components/symbols/proposalSymbol';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import SimpleCardFooter from '../../../../components/simpleCard/components/simpleCardFooter';
import Results from './components/results';

import {
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function PastChallengeView(props) {
  const {
    status,
    challengeId,
    validator,
    challenger,
    stakeSize,
    dailyReward,
    passed,
    winningTokens,
    voterTotal,
    goBack,
  } = props;

  return (
    <div>
      <Row className="pb-5">
        <Col>
          <div className="past-challenge-view__title">
            {`Challenge #${challengeId}`}
          </div>
          {passed ? <AcceptedSymbol /> : <RejectedSymbol />}
          {' '}
          {status === 1 ? <ProposalSymbol /> : <ValidatorSymbol />}
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          {status === 1 ? (
            <div className="past-challenge-view__content">
              <span className="past-challenge-view__content-address">
                {shortenAddress(validator)}
              </span>
              {' '}
              wanted to become a validator.
            </div>
          ) : (
            <div className="past-challenge-view__content">
              <span className="past-challenge-view__content-address">
                {shortenAddress(validator)}
              </span>
              {' '}
              was successfully challenged by
              {' '}
              <span className="past-challenge-view__content-address">
                {shortenAddress(challenger)}
              </span>
            </div>
          )}
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="past-challenge-view__subcontent">
            This challenge has ended.
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs="12" sm="4">
          <SimpleCard>
            <SimpleCardTitle>
              Stake size
            </SimpleCardTitle>
            <SimpleCardContent>
              {stakeSize}
            </SimpleCardContent>
            <SimpleCardFooter>
              <KosuSymbol />
            </SimpleCardFooter>
          </SimpleCard>
        </Col>
        <Col xs="12" sm="4">
          <SimpleCard>
            <SimpleCardTitle>
              Daily reward
            </SimpleCardTitle>
            <SimpleCardContent>
              {dailyReward}
            </SimpleCardContent>
            <SimpleCardFooter>
              <KosuSymbol />
            </SimpleCardFooter>
          </SimpleCard>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="past-challenge-view__results-title">
            Results
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <Results
            winningTokens={winningTokens}
            voterTotal={voterTotal}
            passed={passed}
          />
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

PastChallengeView.propTypes = {
  challengeId: PropTypes.number.isRequired,
  validator: PropTypes.string.isRequired,
  challenger: PropTypes.string.isRequired,
  stakeSize: PropTypes.number.isRequired,
  dailyReward: PropTypes.number.isRequired,
  passed: PropTypes.bool.isRequired,
  winningTokens: PropTypes.number.isRequired,
  voterTotal: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

export default PastChallengeView;
