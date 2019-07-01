import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function AcceptedSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'accepted-symbol' : 'accepted-symbol accepted-symbol--small'}>
      Accepted
    </div>
  );
}

AcceptedSymbol.propTypes = {
  small: PropTypes.bool,
};

AcceptedSymbol.defaultProps = {
  small: false,
};

export default AcceptedSymbol;
