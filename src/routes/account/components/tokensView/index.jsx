import React from 'react';
import PropTypes from 'prop-types';

import ConnectMetaMask from '../../../../components/connectMetaMask';
import Card from '../../../../components/card';
import CardTitle from '../../../../components/card/components/cardTitle';
import CardContent from '../../../../components/card/components/cardContent';
import CardFooter from '../../../../components/card/components/cardFooter';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';

function TokensView(props) {
  const {
    metaMaskConnected,
  } = props;

  return (
    <>
      <Card>
        <CardTitle>
          Total balance
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          System balance
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          In wallet
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          Bonded
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          Staked
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>
          In treasury
        </CardTitle>
        <CardContent>
          0
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
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
