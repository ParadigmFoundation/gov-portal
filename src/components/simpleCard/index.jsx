import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function SimpleCard(props) {
  const {
    children,
  } = props;

  return (
    <div className="simple-card">
      {children.map(child => child)}
    </div>
  );
}

SimpleCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default SimpleCard;
