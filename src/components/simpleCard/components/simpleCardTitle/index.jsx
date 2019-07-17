import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function SimpleCardTitle(props) {
  const {
    children,
  } = props;

  return (
    <div className="simple-card-title">
      {children}
    </div>
  );
}

SimpleCardTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default SimpleCardTitle;
