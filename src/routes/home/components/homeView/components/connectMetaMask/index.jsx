import React from 'react';
import PropTypes from 'prop-types';

function ConnectMetaMask(props) {
  const {
    small,
  } = props;

  return (
    <div className={small ? 'connect-metamask connect-metamask--small' : 'connect-metamask'}>
      Connect to MetaMask.
    </div>
  );
}

ConnectMetaMask.propTypes = {
  small: PropTypes.bool,
};

ConnectMetaMask.defaultProps = {
  small: false,
};

export default ConnectMetaMask;
