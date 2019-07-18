import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ConfirmSymbol(props) {
  const {
    small,
    action,
  } = props;

  return (
    <div
      className={!small ? 'confirm-symbol' : 'confirm-symbol confirm-symbol--small'}
      onClick={() => action()}
      role="button"
      tabIndex="0"
      onKeyPress={() => action()}
    >
      Confirm
    </div>
  );
}

ConfirmSymbol.propTypes = {
  small: PropTypes.bool,
  action: PropTypes.func,
};

ConfirmSymbol.defaultProps = {
  small: false,
  action: () => {},
};

export default ConfirmSymbol;
