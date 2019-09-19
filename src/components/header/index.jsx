/**
 * Handles the logic part of the header
 * TODO: Detect the current route to pass it to the view
 */

import React, {
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';

import GovContext from '../../store/govContext';

import HeaderView from './components';

import {
  shortenAddress,
  formatAmount,
} from '../../utils/formatting';

function Header(props) {
  const {
    isReady,
    walletBalance,
    coinbase,
  } = useContext(GovContext);

  const {
    location: {
      pathname,
    },
  } = props;

  return (
    <HeaderView
      pathname={pathname}
      address={isReady ? shortenAddress(coinbase) : null}
      balance={isReady ? formatAmount(walletBalance) : null}
      metaMaskConnected={isReady}
    />
  );
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
