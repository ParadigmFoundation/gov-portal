import React from 'react';
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

import QuestionIcon from '../../../../components/questionIcon';

function TokensView(props) {
  const {
    metaMaskConnected,
  } = props;

  return (
    <>
      <SimpleCard>
        <SimpleCardTitle>
          Total balance
          <QuestionIcon />
        </SimpleCardTitle>
        <SimpleCardContent>
          0
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
          0
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
              <Button color="outlined" text="Add" small />
            </Col>
          </Row>
        </SimpleCardTitle>
        <SimpleCardContent>
          0
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
              <Button color="outlined" text="Bond" small />
            </Col>
          </Row>
        </SimpleCardTitle>
        <SimpleCardContent>
          0
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
              <Button color="outlined" text="Stake" small />
            </Col>
          </Row>
        </SimpleCardTitle>
        <SimpleCardContent>
          0
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
              <Button color="outlined" text="Add" small />
            </Col>
          </Row>
        </SimpleCardTitle>
        <SimpleCardContent>
          0
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
};

TokensView.defaultProps = {
  metaMaskConnected: false,
};

export default TokensView;
