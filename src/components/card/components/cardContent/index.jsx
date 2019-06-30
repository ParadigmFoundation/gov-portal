import React from 'react';
import PropTypes from 'prop-types';

function CardContent(props) {
  const {
    children,
  } = props;

  return (
    <div className="card__content">
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardContent;
