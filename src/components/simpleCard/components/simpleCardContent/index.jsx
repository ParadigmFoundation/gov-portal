import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function SimpleCardContent(props) {
  const {
    children,
  } = props;

  return (
    <div className="simple-card-content">
      {children}
    </div>
  );
}

SimpleCardContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default SimpleCardContent;
