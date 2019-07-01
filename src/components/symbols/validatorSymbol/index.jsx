import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ValidatorSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'validator-symbol' : 'validator-symbol validator-symbol--small'}>
      Validator
    </div>
  );
}

ValidatorSymbol.propTypes = {
  small: PropTypes.bool,
};

ValidatorSymbol.defaultProps = {
  small: false,
};

export default ValidatorSymbol;
