import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ResolvedSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'resolved-symbol' : 'resolved-symbol resolved-symbol--small'}>
      Confirm
    </div>
  );
}

ResolvedSymbol.propTypes = {
  small: PropTypes.bool,
};

ResolvedSymbol.defaultProps = {
  small: false,
};

export default ResolvedSymbol;
