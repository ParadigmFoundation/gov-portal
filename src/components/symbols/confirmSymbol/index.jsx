import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ConfirmSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'confirm-symbol' : 'confirm-symbol confirm-symbol--small'}>
      Confirm
    </div>
  );
}

ConfirmSymbol.propTypes = {
  small: PropTypes.bool,
};

ConfirmSymbol.defaultProps = {
  small: false,
};

export default ConfirmSymbol;
