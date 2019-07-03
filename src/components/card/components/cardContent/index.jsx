import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function CardContent(props) {
  const {
    children,
  } = props;

  return (
    <div className="card-content">
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardContent;
