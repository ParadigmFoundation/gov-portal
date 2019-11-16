import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';
import numeral from 'numeral';

import ValidatorSymbol from '../../../../components/symbols/validatorSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import ProposalSymbol from '../../../../components/symbols/proposalSymbol';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Link from '../../../../components/link';
import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import SimpleCardFooter from '../../../../components/simpleCard/components/simpleCardFooter';
import Results from './components/results';

import Tooltip from '../../../../components/tooltip';
import tooltipsJson from '../../../../assets/content/tooltips.json';

import {
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function PastChallengeView(props) {
  const {
    status,
    challengeId,
    owner,
    challenger,
    stakeSize,
    dailyReward,
    passed,
    winningTokens,
    voterTotal,
  } = props;

  return (
    <div className="past-challenge-view container fluid">
      <Row className="pb-5">
        <Col>
          <div className="past-challenge-view__title">
            {`Challenge #${challengeId}`}
          </div>
          {status === 1 ? <ProposalSymbol /> : <ValidatorSymbol />}
          {' '}
          {passed ? <AcceptedSymbol /> : <RejectedSymbol />}
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          {status === 1 ? (
            <div className="past-challenge-view__content">
              <span className="past-challenge-view__content-address">
                {shortenAddress(owner)}
              </span>
              {' '}
              wanted to become a validator.
            </div>
          ) : (
            <div className="past-challenge-view__content">
              <span className="past-challenge-view__content-address">
                {shortenAddress(owner)}
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
              {numeral(stakeSize).format('0,0.[00]')}
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
              {numeral(dailyReward).format('0,0.[00]')}
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
            {' '}
            <Tooltip
              text={tooltipsJson.results}
            />
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

PastChallengeView.propTypes = {
  challengeId: PropTypes.string,
  owner: PropTypes.string,
  challenger: PropTypes.string,
  stakeSize: PropTypes.string,
  dailyReward: PropTypes.string,
  passed: PropTypes.bool,
  winningTokens: PropTypes.number,
  voterTotal: PropTypes.number,
  status: PropTypes.number,
};

PastChallengeView.defaultProps = {
  challengeId: '0',
  owner: '0',
  challenger: '0',
  stakeSize: '0',
  dailyReward: '0',
  passed: false,
  winningTokens: 0,
  voterTotal: 0,
  status: 0,
};

export default PastChallengeView;
