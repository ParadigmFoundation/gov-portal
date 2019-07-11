import React, {
  useState,
  useContext,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import HeaderView from './components';

import {
  shortenAddress,
} from '../../utils/formatting';

function Header() {
  const {
    gov,
    isReady,
  } = useContext(GovContext);

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
  }, [isReady]);

  return (
    <HeaderView
      address={address && shortenAddress(address)}
      balance={balance && gov.weiToEther(balance)}
      metaMaskConnected={isMetaMaskConnected}
    />
  );
}

export default Header;
