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
    walletBalance,
    totalBalance,
    systemBalance,
    bondedTokens,
    tokensStakedFor,
    treasuryBalance,
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
          <TokensView
            metaMaskConnected
            walletBalance={walletBalance}
            totalBalance={totalBalance}
            systemBalance={systemBalance}
            bondedTokens={bondedTokens}
            tokensStakedFor={tokensStakedFor}
            treasuryBalance={treasuryBalance}
          />
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

AccountView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  walletBalance: PropTypes.string,
  totalBalance: PropTypes.string,
  systemBalance: PropTypes.string,
  bondedTokens: PropTypes.string,
  tokensStakedFor: PropTypes.string,
  treasuryBalance: PropTypes.string,
};

AccountView.defaultProps = {
  metaMaskConnected: false,
  walletBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
};

export default AccountView;
