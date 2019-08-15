import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Row,
  Col,
} from 'reactstrap';

import WarningSign from '../../../../assets/img/warning_grey.png';

import ConnectMetaMask from '../../../../components/connectMetaMask';
import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import SimpleCardFooter from '../../../../components/simpleCard/components/simpleCardFooter';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';

import BondModal from '../bondModal';
import AddTreasuryModal from '../addTreasuryModal';
import ManageTreasuryModal from '../manageTreasuryModal';
import TreasuryBalanceModal from '../treasuryBalanceModal';

import Tooltip from '../../../../components/tooltip';

import tooltipsJson from '../../../../assets/content/tooltips.json';

const Layer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  width: 849px;
  margin: 15px;
  height: 145px;
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
    totalBalance,
    systemBalance,
    bondedTokens,
    tokensStakedFor,
    treasuryBalance,
    bondTokens,
    unbondTokens,
    updateBalance,
    addToTreasury,
    removeTreasury,
    setTreasuryAllowance,
  } = props;

  const [isBondModalOpen, setIsBondModalOpen] = useState(false);
  const [isManageTreasuryModalOpen, setIsManageTreasuryModalOpen] = useState(false);
  const [isAddTreasuryModalOpen, setIsAddTreasuryModalOpen] = useState(false);
  const [isTreasuryBalanceModalOpen, setIsTreasuryBalanceModalOpen] = useState(false);

  return (
    <>
      <BondModal
        isOpen={isBondModalOpen}
        toggle={() => setIsBondModalOpen(!isBondModalOpen)}
        limit={5025}
        confirm={bondTokens}
        currentBond={bondedTokens}
      />
      <ManageTreasuryModal
        isOpen={isManageTreasuryModalOpen}
        toggle={() => setIsManageTreasuryModalOpen(!isManageTreasuryModalOpen)}
        edit={() => setIsTreasuryBalanceModalOpen(true)}
        remove={removeTreasury}
      />
      <AddTreasuryModal
        isOpen={isAddTreasuryModalOpen}
        toggle={() => setIsAddTreasuryModalOpen(!isAddTreasuryModalOpen)}
        add={addToTreasury}
      />
      <TreasuryBalanceModal
        isOpen={isTreasuryBalanceModalOpen}
        toggle={() => setIsTreasuryBalanceModalOpen(!isTreasuryBalanceModalOpen)}
        updateBalance={updateBalance}
        currentBalance={treasuryBalance}
      />
      <SimpleCard>
        <SimpleCardTitle>
          Total balance
          <Tooltip
            text={tooltipsJson.Wallet}
          />
        </SimpleCardTitle>
        <SimpleCardContent>
          {totalBalance}
        </SimpleCardContent>
        <SimpleCardFooter>
          <KosuSymbol />
        </SimpleCardFooter>
      </SimpleCard>
      <SimpleCard>
        <SimpleCardTitle>
          System balance
          <Tooltip
            text={tooltipsJson.Wallet}
          />
        </SimpleCardTitle>
        <SimpleCardContent>
          {systemBalance}
        </SimpleCardContent>
        <SimpleCardFooter>
          <KosuSymbol />
        </SimpleCardFooter>
      </SimpleCard>
      <SimpleCard>
        <SimpleCardTitle>
          <Row>
            <Col>
              In wallet
              <Tooltip
                text={tooltipsJson.Wallet}
              />
            </Col>
            <Col className="text-right">
              <Button
                color="outlined-green"
                text="Add"
                disabled={!metaMaskConnected}
                small
              />
            </Col>
          </Row>
        </SimpleCardTitle>
        <SimpleCardContent>
          {walletBalance}
        </SimpleCardContent>
        <SimpleCardFooter>
          <KosuSymbol />
        </SimpleCardFooter>
      </SimpleCard>
      <div>
        {treasuryAllowance === '0' && (
          <Layer>
            <Warning
              src={WarningSign}
              alt="Warning sign"
            />
            <Button
              action={() => setTreasuryAllowance}
              text="Click here to enable access to the Treasury."
              color="inverted"
            />
          </Layer>
        )}
        <div>
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  Bonded
                  <Tooltip
                    text={tooltipsJson.Wallet}
                  />
                </Col>
                <Col className="text-right">
                  <Button
                    color="outlined-green"
                    text="Bond"
                    disabled={!metaMaskConnected}
                    action={() => setIsBondModalOpen(true)}
                    small
                  />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {bondedTokens}
            </SimpleCardContent>
            <SimpleCardFooter>
              <KosuSymbol />
            </SimpleCardFooter>
          </SimpleCard>
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  Staked
                  <Tooltip
                    text={tooltipsJson.Wallet}
                  />
                </Col>
                <Col className="text-right">
                  <Button color="outlined-green" text="Stake" small disabled={!metaMaskConnected} />
                </Col>
              </Row>
            </SimpleCardTitle>
            <SimpleCardContent>
              {tokensStakedFor}
            </SimpleCardContent>
            <SimpleCardFooter>
              <KosuSymbol />
            </SimpleCardFooter>
          </SimpleCard>
          <SimpleCard>
            <SimpleCardTitle>
              <Row>
                <Col>
                  In treasury
                  <Tooltip
                    text={tooltipsJson.Wallet}
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
              {treasuryBalance}
            </SimpleCardContent>
            <SimpleCardFooter>
              <KosuSymbol />
            </SimpleCardFooter>
          </SimpleCard>
        </div>
      </div>
    </>
  );
}

TokensView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  treasuryAllowance: PropTypes.string,
  walletBalance: PropTypes.string,
  totalBalance: PropTypes.string,
  systemBalance: PropTypes.string,
  bondedTokens: PropTypes.string,
  tokensStakedFor: PropTypes.string,
  treasuryBalance: PropTypes.string,
  bondTokens: PropTypes.func,
  unbondTokens: PropTypes.func,
  addToTreasury: PropTypes.func,
  removeTreasury: PropTypes.func,
  setTreasuryAllowance: PropTypes.func,
  updateBalance: PropTypes.func,
};

TokensView.defaultProps = {
  metaMaskConnected: false,
  treasuryAllowance: '0',
  walletBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
  bondTokens: () => {},
  unbondTokens: () => {},
  addToTreasury: () => {},
  removeTreasury: () => {},
  setTreasuryAllowance: () => {},
  updateBalance: () => {},
};

export default TokensView;
