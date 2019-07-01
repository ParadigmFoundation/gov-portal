import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function RejectedSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'rejected-symbol' : 'rejected-symbol rejected-symbol--small'}>
      Rejected
    </div>
  );
}

RejectedSymbol.propTypes = {
  small: PropTypes.bool,
};

RejectedSymbol.defaultProps = {
  small: false,
};

export default RejectedSymbol;
