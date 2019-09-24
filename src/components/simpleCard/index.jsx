import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function SimpleCard(props) {
  const {
    children,
    minHeight,
  } = props;

  return (
    <div className={minHeight ? 'simple-card simple-card--min-height' : 'simple-card'}>
      {children.map(child => child)}
    </div>
  );
}

SimpleCard.propTypes = {
  minHeight: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

SimpleCard.defaultProps = {
  minHeight: false,
};

export default SimpleCard;
