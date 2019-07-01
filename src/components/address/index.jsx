import React from 'react';
import PropTypes from 'prop-types';

import {
  shortenAddress,
} from '../../utils/formatting';

import './index.scss';

function Address(props) {
  const {
    address,
    short,
    icon,
  } = props;

  return (
    <div className="address">
      {icon && <div className="address__icon" />}
      <span className="address__text">
        {short ? shortenAddress(address) : address}
      </span>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
  short: PropTypes.bool,
  icon: PropTypes.bool,
};

Address.defaultProps = {
  short: false,
  icon: false,
};

export default Address;
