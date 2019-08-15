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
    confirmListing,
    resolveChallenge,
    bondTokens,
    addToTreasury,
    removeTreasury,
    updateBalance,
    treasuryAllowance,
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
            metaMaskConnected={metaMaskConnected}
            walletBalance={walletBalance}
            totalBalance={totalBalance}
            systemBalance={systemBalance}
            bondedTokens={bondedTokens}
            treasuryAllowance={treasuryAllowance}
            tokensStakedFor={tokensStakedFor}
            treasuryBalance={treasuryBalance}
            bondTokens={bondTokens}
            addToTreasury={addToTreasury}
            removeTreasury={removeTreasury}
            updateBalance={updateBalance}
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
          <OrdersView
            metaMaskConnected={metaMaskConnected}
          />
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
          <GovernanceActivityView
            metaMaskConnected={metaMaskConnected}
            confirmListing={confirmListing}
            resolveChallenge={resolveChallenge}
          />
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
  treasuryAllowance: PropTypes.string,
  confirmListing: PropTypes.func,
  resolveChallenge: PropTypes.func,
  bondTokens: PropTypes.func,
  addToTreasury: PropTypes.func,
  removeTreasury: PropTypes.func,
  updateBalance: PropTypes.func,
};

AccountView.defaultProps = {
  metaMaskConnected: false,
  walletBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
  treasuryAllowance: '0',
  confirmListing: () => {},
  resolveChallenge: () => {},
  bondTokens: () => {},
  addToTreasury: () => {},
  removeTreasury: () => {},
  updateBalance: () => {},
};

export default AccountView;
