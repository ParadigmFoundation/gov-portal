import React, {
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import './index.scss';

function ConnectMetaMask(props) {
  const {
    small,
    text,
  } = props;

  const [state, setState] = useState('idle');

  const {
    initGov,
  } = useContext(GovContext);

  async function handleClick() {
    setState('pending');
    await initGov();
  }

  return (
    <div
      className={small ? 'connect-metamask connect-metamask--small' : 'connect-metamask'}
      onClick={async () => handleClick()}
      role="button"
      tabIndex="0"
      onKeyPress={async () => handleClick()}
    >
      {state === 'idle' ? text : 'Connecting to MetaMask'}
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
