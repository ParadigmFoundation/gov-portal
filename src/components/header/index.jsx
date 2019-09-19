/**
 * Handles the logic part of the header
 * TODO: Detect the current route to pass it to the view
 */

import React, {
  useState,
  useContext,
  useEffect,
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
    gov,
    isReady,
  } = useContext(GovContext);

  const {
    location: {
      pathname,
    },
  } = props;

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function fetchUserInfo() {
      if (isReady) {
        const { coinbase } = gov;

        const res = await gov.kosu.kosuToken.balanceOf(coinbase);

        setIsMetaMaskConnected(true);
        setAddress(coinbase);
        setBalance(res.toString());
      }
    }

    fetchUserInfo();
  }, [isReady, gov]);

  return (
    <HeaderView
      pathname={pathname}
      address={address && shortenAddress(address)}
      balance={balance && formatAmount(gov.weiToEther(balance))}
      metaMaskConnected={isMetaMaskConnected}
    />
  );
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
