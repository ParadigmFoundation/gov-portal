import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import './index.scss';

function ConnectMetaMask(props) {
  const {
    small,
    text,
  } = props;

  const {
    gov,
  } = useContext(GovContext);

  const [state, setState] = useState('idle');
  const [networkId, setNetworkId] = useState();

  useEffect(() => {
    if (window.ethereum) {
      setNetworkId(window.ethereum.networkVersion);
    }
  });

  async function handleClick() {
    setState('pending');

    try {
      await gov.init();
    } catch (err) {
      setState('idle');
      console.log(err);
    }
  }

  function isCorrectNetwork() {
    if (networkId === '3' || networkId === '6174') {
      return true;
    }

    return false;
  }

  function returnState() {
    if (!isCorrectNetwork()) {
      return 'Wrong network...';
    }

    if (state === 'idle') {
      return text;
    }

    if (state === 'pending') {
      return 'Connecting MetaMask...';
    }

    return 'Loading...';
  }

  return (
    <div
      className={small ? 'connect-metamask connect-metamask--small' : 'connect-metamask'}
      onClick={isCorrectNetwork() ? async () => handleClick() : (() => {})}
      role="button"
      tabIndex="0"
      onKeyPress={isCorrectNetwork() ? async () => handleClick() : (() => {})}
    >
      {returnState()}
    </div>
  );
}

ConnectMetaMask.propTypes = {
  small: PropTypes.bool,
  text: PropTypes.string,
};

ConnectMetaMask.defaultProps = {
  small: false,
  text: 'Click to connect MetaMask',
};

export default ConnectMetaMask;
