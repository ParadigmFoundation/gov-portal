import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
} from 'reactstrap';

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

import QuestionIcon from '../../../../components/questionIcon';

function TokensView(props) {
  const {
    metaMaskConnected,
    walletBalance,
    totalBalance,
    systemBalance,
    bondedTokens,
    tokensStakedFor,
    treasuryBalance,
    bondTokens,
    addToTreasury,
    removeTreasury,
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
      <SimpleCard>
        <SimpleCardTitle>
          Total balance
          <QuestionIcon />
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
          <QuestionIcon />
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
              <QuestionIcon />
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
      <SimpleCard>
        <SimpleCardTitle>
          <Row>
            <Col>
              Bonded
              <QuestionIcon />
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
              <QuestionIcon />
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
              <QuestionIcon />
            </Col>
            <Col xs={4} className="text-right">
              <Button
                color="outlined-green"
                text="Add"
                disabled={!metaMaskConnected}
                action={() => setIsAddTreasuryModalOpen(true)}
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
    </>
  );
}

TokensView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  walletBalance: PropTypes.string,
  totalBalance: PropTypes.string,
  systemBalance: PropTypes.string,
  bondedTokens: PropTypes.string,
  tokensStakedFor: PropTypes.string,
  treasuryBalance: PropTypes.string,
  bondTokens: PropTypes.func,
  addToTreasury: PropTypes.func,
  removeTreasury: PropTypes.func,
};

TokensView.defaultProps = {
  metaMaskConnected: false,
  walletBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  bondedTokens: '0',
  tokensStakedFor: '0',
  treasuryBalance: '0',
  bondTokens: () => {},
  addToTreasury: () => {},
  removeTreasury: () => {},
};

export default TokensView;
