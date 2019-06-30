import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    children,
  } = props;

  return (
    <div className="card">
      {children.map(child => child)}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
