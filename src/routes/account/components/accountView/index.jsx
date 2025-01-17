import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import OrdersView from '../ordersView';
import TokensView from '../tokensView';
import GovernanceActivityView from '../governanceActivityView';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';

import Tooltip from '../../../../components/tooltip';
import tooltipsJson from '../../../../assets/content/tooltips.json';

import './index.scss';

function AccountView(props) {
  const {
    metaMaskConnected,
    walletBalance,
    ethBalance,
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
    orders,
    activities,
    pay,
    estimate,
    estimateNewPostLimit,
    setTreasuryAllowance,
    pastChallenges,
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
            Your
            {' '}
            <KosuSymbol />
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col>
          <TokensView
            metaMaskConnected={metaMaskConnected}
            walletBalance={walletBalance}
            ethBalance={ethBalance}
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
            pay={pay}
            estimate={estimate}
            estimateNewPostLimit={estimateNewPostLimit}
            setTreasuryAllowance={setTreasuryAllowance}
          />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="account-view__subtitle">
            Your Orders
            <Tooltip
              text={tooltipsJson.yourOrders}
            />
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col className="account-view__orders-wrapper">
          <OrdersView
            metaMaskConnected={metaMaskConnected}
            orders={orders}
          />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <div className="account-view__subtitle">
            Your Governance Activity
            <Tooltip
              text={tooltipsJson.govActivity}
            />
          </div>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col className="account-view__gov-activity-wrapper">
          <GovernanceActivityView
            metaMaskConnected={metaMaskConnected}
            confirmListing={confirmListing}
            resolveChallenge={resolveChallenge}
            activities={activities}
            pastChallenges={pastChallenges}
          />
        </Col>
      </Row>
    </div>
  );
}

AccountView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  walletBalance: PropTypes.string,
  ethBalance: PropTypes.string,
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
  pay: PropTypes.func,
  estimate: PropTypes.func,
  estimateNewPostLimit: PropTypes.func,
  setTreasuryAllowance: PropTypes.func,
  orders: PropTypes.arrayOf(PropTypes.object),
  activities: PropTypes.arrayOf(PropTypes.object),
  pastChallenges: PropTypes.arrayOf(PropTypes.object),
};

AccountView.defaultProps = {
  metaMaskConnected: false,
  walletBalance: '0',
  ethBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
  treasuryAllowance: '',
  setTreasuryAllowance: () => {},
  confirmListing: () => {},
  resolveChallenge: () => {},
  bondTokens: () => {},
  addToTreasury: () => {},
  removeTreasury: () => {},
  updateBalance: () => {},
  pay: () => {},
  estimate: () => {},
  estimateNewPostLimit: () => {},
  orders: [],
  activities: [],
  pastChallenges: [],
};

export default AccountView;
