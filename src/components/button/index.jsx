import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    text,
  } = props;

  return (
    <button className="button" type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
