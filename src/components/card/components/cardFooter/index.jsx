import React from 'react';
import PropTypes from 'prop-types';

function CardFooter(props) {
  const {
    children,
  } = props;

  return (
    <div className="card__footer">
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardFooter;
