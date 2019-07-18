import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ConfirmedSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'confirmed-symbol' : 'confirmed-symbol confirmed-symbol--small'}>
      Confirm
    </div>
  );
}

ConfirmedSymbol.propTypes = {
  small: PropTypes.bool,
};

ConfirmedSymbol.defaultProps = {
  small: false,
};

export default ConfirmedSymbol;
