import React from 'react';
import PropTypes from 'prop-types';

function CardTitle(props) {
  const {
    children,
  } = props;

  return (
    <div className="card__title">
      {children}
    </div>
  );
}

CardTitle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardTitle;
