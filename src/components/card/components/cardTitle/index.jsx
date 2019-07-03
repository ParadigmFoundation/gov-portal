import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function CardTitle(props) {
  const {
    children,
  } = props;

  return (
    <div className="card-title">
      {children}
    </div>
  );
}

CardTitle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardTitle;
