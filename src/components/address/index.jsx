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
    clickable,
    onClick,
  } = props;

  return (
    <div className="address">
      {icon && <div className="address__icon" />}
      <span
        className={clickable ? 'address__text address__text--clickable' : 'address__text'}
        onClick={onClick}
      >
        {short ? shortenAddress(address) : address}
      </span>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
  short: PropTypes.bool,
  icon: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
};

Address.defaultProps = {
  short: false,
  icon: false,
  clickable: false,
  onClick: () => {},
};

export default Address;
