import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';

import './index.scss';

function HomeView(props) {
  const {
    metaMaskConnected,
    validators,
    pastChallenges,
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
      <Row className="pb-4">
        <Col>
          <div className="home-view__subtitle">
            Validator
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <Table>
            <thead>
              <tr>
                <th>
                  Address
                </th>
                <th>
                  Stake
                </th>
                <th>
                  Daily Reward
                </th>
                <th>
                  Voting Power
                </th>
                <th>
                  Uptime
                </th>
                <th>
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {!metaMaskConnected ? (
                <tr>
                  <td colSpan="6">
                    <ConnectMetaMask />
                  </td>
                </tr>
              ) : (
                validators.map(validator => validator)
              )}
            </tbody>
          </Table>
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
          <Table>
            <thead>
              <tr>
                <th>
                  Id
                </th>
                <th>
                  Challenger
                </th>
                <th>
                  Type
                </th>
                <th>
                  Result
                </th>
                <th>
                  Tokens at Stake
                </th>
                <th>
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {!metaMaskConnected ? (
                <tr>
                  <td colSpan="6">
                    <ConnectMetaMask />
                  </td>
                </tr>
              ) : (
                pastChallenges.map(pastChallenge => pastChallenge)
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

HomeView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.element),
  pastChallenges: PropTypes.arrayOf(PropTypes.element),
};

HomeView.defaultProps = {
  metaMaskConnected: false,
  validators: [],
  pastChallenges: [],
};

export default HomeView;
