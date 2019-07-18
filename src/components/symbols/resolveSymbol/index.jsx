import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ResolveSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'resolve-symbol' : 'resolve-symbol resolve-symbol--small'}>
      Confirm
    </div>
  );
}

ResolveSymbol.propTypes = {
  small: PropTypes.bool,
};

ResolveSymbol.defaultProps = {
  small: false,
};

export default ResolveSymbol;
