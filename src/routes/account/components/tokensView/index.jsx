/* eslint-disable no-restricted-globals */

import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Row,
  Col,
  Spinner,
} from 'reactstrap';
import numeral from 'numeral';

import WarningSign from '../../../../assets/img/warning_grey.png';

import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import Button from '../../../../components/button';

import NothingToBond from '../nothingToBond';
import BondModal from '../bondModal';
import AddTreasuryModal from '../addTreasuryModal';
import ManageTreasuryModal from '../manageTreasuryModal';
import TreasuryBalanceModal from '../treasuryBalanceModal';
import WalletModal from '../walletModal';

import Tooltip from '../../../../components/tooltip';
import tooltipsJson from '../../../../assets/content/tooltips.json';

const Layer = styled.div`
  top: 0;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  margin: 15px;
  height: 100%;
  z-index: 1;
  text-align: center;
  line-height: normal;
  justify-content: center;
  align-content: center;
  display: inline-grid;
`;

const Warning = styled.img`
  width: 28px;
  height: 28px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
`;

function TokensView(props) {
  const {
    metaMaskConnected,
    treasuryAllowance,
    walletBalance,
    ethBalance,
    totalBalance,
    systemBalance,
    bondedTokens,
    tokensStakedFor,
    treasuryBalance,
    bondTokens,
    updateBalance,
    addToTreasury,
    removeTreasury,
    setTreasuryAllowance,
    estimate,
    pay,
    estimateNewPostLimit,
  } = props;

  const [isNothingToBondModalOpen, toggleNothingToBondModal] = useState(false);
  const [isBondModalOpen, setIsBondModalOpen] = useState(false);
  const [isManageTreasuryModalOpen, setIsManageTreasuryModalOpen] = useState(false);
  const [isAddTreasuryModalOpen, setIsAddTreasuryModalOpen] = useState(false);
  const [isTreasuryBalanceModalOpen, setIsTreasuryBalanceModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  function handleAllowanceLayer() {
    if (treasuryAllowance === '') {
      return (
        <Layer>
          <Spinner />
        </Layer>
      );
    }

    if (treasuryAllowance === '0') {
      return (
        <Layer>
          <Warning
            src={WarningSign}
            alt="Warning sign"
          />
          <Button
            action={setTreasuryAllowance}
            text="Click here to enable access to the Treasury."
            color="inverted"
          />
        </Layer>
      );
    }

    return (<></>);
  }

  return (
    <>
      <NothingToBond
        isOpen={isNothingToBondModalOpen}
        toggle={() => toggleNothingToBondModal(!isNothingToBondModalOpen)}
      />
      <BondModal
        isOpen={isBondModalOpen}
        toggle={() => setIsBondModalOpen(!isBondModalOpen)}
        max={treasuryBalance}
        confirm={bondTokens}
        currentBond={bondedTokens}
        estimateNewPostLimit={estimateNewPostLimit}
      />
      <ManageTreasuryModal
        isOpen={isManageTreasuryModalOpen}
        toggle={() => setIsManageTreasuryModalOpen(!isManageTreasuryModalOpen)}
        edit={() => setIsTreasuryBalanceModalOpen(true)}
        remove={removeTreasury}
      />
      <AddTreasuryModal
        walletBalance={walletBalance}
        isOpen={isAddTreasuryModalOpen}
        toggle={() => setIsAddTreasuryModalOpen(!isAddTreasuryModalOpen)}
        add={addToTreasury}
      />
      <TreasuryBalanceModal
        isOpen={isTreasuryBalanceModalOpen}
        toggle={() => {
          setIsTreasuryBalanceModalOpen(!isTreasuryBalanceModalOpen);
          setIsManageTreasuryModalOpen(!isManageTreasuryModalOpen);
        }}
        updateBalance={updateBalance}
        currentBalance={treasuryBalance}
        max={parseFloat(walletBalance) + parseFloat(treasuryBalance)}
      />
      <WalletModal
        isOpen={isWalletModalOpen}
        toggle={() => setIsWalletModalOpen(!isWalletModalOpen)}
        pay={pay}
        estimate={estimate}
        ethBalance={ethBalance}
      />
      <Row>
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              Total balance
              <Tooltip
                text={tooltipsJson.totalBalance}
              />
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(totalBalance).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              System balance
              <Tooltip
                text={tooltipsJson.systemBalance}
              />
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(systemBalance).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  In wallet
                  <Tooltip
                    text={tooltipsJson.inWallet}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    action={() => setIsWalletModalOpen(!isWalletModalOpen)}
                    color="outlined-green"
                    text="Add"
                    disabled={!metaMaskConnected}
                    small
                  />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(walletBalance).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
        {handleAllowanceLayer()}
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  Bonded
                  <Tooltip
                    text={tooltipsJson.bondedTokens}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    color="outlined-green"
                    text={bondedTokens === '0' ? 'Bond' : 'Edit'}
                    disabled={!metaMaskConnected}
                    action={
                      treasuryBalance === '0' ? () => toggleNothingToBondModal(!isNothingToBondModalOpen) : () => setIsBondModalOpen(true)}
                    small
                  />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(bondedTokens).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  Staked
                  <Tooltip
                    text={tooltipsJson.stakedTokens}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    color="outlined-green"
                    text="Stake"
                    disabled={!metaMaskConnected}
                    action={() => {
                      window.open('https://docs.kosu.io/overview/governance.html');
                    }}
                    small
                  />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(tokensStakedFor).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="py-3">
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  In treasury
                  <Tooltip
                    text={tooltipsJson.inTreasury}
                  />
                </Col>
                <Col xs={4} className="text-right">
                  <Button
                    color="outlined-green"
                    text={treasuryBalance === '0' ? 'Add' : 'Edit'}
                    action={treasuryBalance === '0' ? () => setIsAddTreasuryModalOpen(!isAddTreasuryModalOpen) : () => setIsManageTreasuryModalOpen(!isManageTreasuryModalOpen)}
                    disabled={!metaMaskConnected}
                    small
                  />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {numeral(treasuryBalance).format('0,0.[00]')}
            </SimpleCardContent>
          </SimpleCard>
        </Col>
      </Row>
    </>
  );
}

TokensView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  treasuryAllowance: PropTypes.string,
  walletBalance: PropTypes.string,
  ethBalance: PropTypes.string,
  totalBalance: PropTypes.string,
  systemBalance: PropTypes.string,
  bondedTokens: PropTypes.string,
  tokensStakedFor: PropTypes.string,
  treasuryBalance: PropTypes.string,
  bondTokens: PropTypes.func,
  addToTreasury: PropTypes.func,
  removeTreasury: PropTypes.func,
  setTreasuryAllowance: PropTypes.func,
  updateBalance: PropTypes.func,
  estimate: PropTypes.func,
  pay: PropTypes.func,
  estimateNewPostLimit: PropTypes.func,
};

TokensView.defaultProps = {
  metaMaskConnected: false,
  treasuryAllowance: '',
  walletBalance: '0',
  ethBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
  bondTokens: () => {},
  estimateNewPostLimit: () => {},
  addToTreasury: () => {},
  removeTreasury: () => {},
  setTreasuryAllowance: () => {},
  updateBalance: () => {},
  estimate: () => {},
  pay: () => {},
};

export default TokensView;
