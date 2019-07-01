import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import ConnectMetaMask from './components/connectMetaMask';

function HomeView(props) {
  const {
    metaMaskConnected,
  } = props;

  return (
    <div>
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
          {!metaMaskConnected && (
            <ConnectMetaMask />
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
          {!metaMaskConnected && (
            <ConnectMetaMask />
          )}
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="home-view__subtitle">
            Validator
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          {!metaMaskConnected && (
            <ConnectMetaMask />
          )}
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <div className="home-view__subtitle">
            Past Challenges
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          {!metaMaskConnected && (
            <ConnectMetaMask />
          )}
        </Col>
      </Row>
    </div>
  );
}

HomeView.propTypes = {
  metaMaskConnected: PropTypes.bool,
};

HomeView.defaultProps = {
  metaMaskConnected: false,
};

export default HomeView;
