import React, {
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import './index.scss';

function ConnectMetaMask(props) {
  const {
    small,
    text,
  } = props;

  const gov = useContext(GovContext);

  async function initGov() {
    if (gov) {
      try {
        await gov.init();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Gov is not defined');
    }
  }

  return (
    <div
      className={small ? 'connect-metamask connect-metamask--small' : 'connect-metamask'}
      onClick={async () => initGov()}
      role="button"
      tabIndex="0"
      onKeyPress={async () => initGov()}
    >
      {text}
    </div>
  );
}

ConnectMetaMask.propTypes = {
  small: PropTypes.bool,
  text: PropTypes.string,
};

ConnectMetaMask.defaultProps = {
  small: false,
  text: 'Connect to MetaMask.',
};

export default ConnectMetaMask;
