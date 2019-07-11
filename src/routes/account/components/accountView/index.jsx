import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import QuestionIcon from '../../../../components/questionIcon';

import OrdersView from '../ordersView';
import TokensView from '../tokensView';
import GovernanceActivityView from '../governanceActivityView';

import './index.scss';

function AccountView(props) {
  const {
    metaMaskConnected,
  } = props;

  return (
    <div className="account-view container">
      <Row className="pb-5">
        <Col>
          <div className="account-view__title">
            Your Account
          </div>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="account-view__subtitle">
            Your Tokens
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <TokensView />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="account-view__subtitle">
            Your Orders
            <QuestionIcon />
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <OrdersView />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="account-view__subtitle">
            Your Governance Activity
            <QuestionIcon />
          </div>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <GovernanceActivityView />
        </Col>
      </Row>
    </div>
  );
}

export default AccountView;
