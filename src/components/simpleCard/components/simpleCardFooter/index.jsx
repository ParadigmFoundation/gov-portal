import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function SimpleCardFooter(props) {
  const {
    children,
  } = props;

  return (
    <div className="simple-card-footer">
      {children}
    </div>
  );
}

SimpleCardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default SimpleCardFooter;
