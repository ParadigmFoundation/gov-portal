import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function CardFooter(props) {
  const {
    children,
  } = props;

  return (
    <div className="card-footer">
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardFooter;
