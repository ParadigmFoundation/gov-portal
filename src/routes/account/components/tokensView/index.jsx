import React from 'react';
import PropTypes from 'prop-types';

import ConnectMetaMask from '../../../../components/connectMetaMask';
import SimpleCard from '../../../../components/simpleCard';
import SimpleCardTitle from '../../../../components/simpleCard/components/simpleCardTitle';
import SimpleCardContent from '../../../../components/simpleCard/components/simpleCardContent';
import SimpleCardFooter from '../../../../components/simpleCard/components/simpleCardFooter';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';

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
          In wallet
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
          Bonded
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
          Staked
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
          In treasury
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
