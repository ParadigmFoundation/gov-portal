import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import ValidatorsView from '../validatorsView';
import PastChallengesView from '../pastChallengesView';
import ActiveChallengesView from '../activeChallengesView';
import ActiveProposalsView from '../activeProposalsView';

import './index.scss';

function HomeView(props) {
  const {
    metaMaskConnected,
    proposals,
    activeChallenges,
    pastChallenges,
    validators,
  } = props;

  return (
    <div className="home-view container">
      <Row className="pb-4">
        <Col>
          <div className="home-view__title">
            Governance
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="home-view__subtitle">
            Active Proposals
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <ActiveProposalsView
            metaMaskConnected={metaMaskConnected}
            proposals={proposals}
          />
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="home-view__subtitle">
            Active Challenges
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <ActiveChallengesView
            metaMaskConnected={metaMaskConnected}
            activeChallenges={activeChallenges}
          />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="home-view__subtitle">
            Validators
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <ValidatorsView
            metaMaskConnected={metaMaskConnected}
            validators={validators}
          />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="home-view__subtitle">
            Past Challenges
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <PastChallengesView
            metaMaskConnected={metaMaskConnected}
            pastChallenges={pastChallenges}
          />
        </Col>
      </Row>
    </div>
  );
}

HomeView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  proposals: PropTypes.arrayOf(PropTypes.object),
  activeChallenges: PropTypes.arrayOf(PropTypes.object),
  validators: PropTypes.arrayOf(PropTypes.object),
  pastChallenges: PropTypes.arrayOf(PropTypes.object),
};

HomeView.defaultProps = {
  metaMaskConnected: false,
  proposals: [],
  activeChallenges: [],
  validators: [],
  pastChallenges: [],
};

export default HomeView;
