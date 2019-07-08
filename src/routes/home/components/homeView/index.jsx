import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';

import ValidatorsView from '../validatorsView';
import PastChallengesView from '../pastChallengesView';

import './index.scss';

function HomeView(props) {
  function displayProposals(proposalsToDisplay) {
    if (proposalsToDisplay.length === 0) {
      return <EmptyState />;
    }
  }

  function displayActiveChallenges(activeChallengesToDisplay) {
    if (activeChallengesToDisplay.length === 0) {
      return <EmptyState />;
    }
  }

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
          {!metaMaskConnected ? (
            <ConnectMetaMask />
          ) : (
            displayProposals(proposals)
          )}
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
          {!metaMaskConnected ? (
            <ConnectMetaMask />
          ) : (
            displayActiveChallenges(activeChallenges)
          )}
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
  proposals: PropTypes.arrayOf(PropTypes.element),
  activeChallenges: PropTypes.arrayOf(PropTypes.element),
  validators: PropTypes.arrayOf(PropTypes.element),
  pastChallenges: PropTypes.arrayOf(PropTypes.element),
};

HomeView.defaultProps = {
  metaMaskConnected: false,
  proposals: [],
  activeChallenges: [],
  validators: [],
  pastChallenges: [],
};

export default HomeView;
