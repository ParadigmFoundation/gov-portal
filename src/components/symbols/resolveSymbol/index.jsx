import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ResolveSymbol(props) {
  const {
    small,
    action,
  } = props;

  return (
    <div
      className={!small ? 'resolve-symbol' : 'resolve-symbol resolve-symbol--small'}
      onClick={() => action()}
      role="button"
      tabIndex="0"
      onKeyPress={() => action()}
    >
      Resolve
    </div>
  );
}

ResolveSymbol.propTypes = {
  small: PropTypes.bool,
  action: PropTypes.func,
};

ResolveSymbol.defaultProps = {
  small: false,
  action: () => {},
};

export default ResolveSymbol;
