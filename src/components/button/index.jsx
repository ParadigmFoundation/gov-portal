import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    text,
    action,
    color,
  } = props;

  function getColor(prop) {
    if (prop === 'inverted') {
      return 'button button--inverted';
    }

    if (prop === 'red') {
      return 'button button--red';
    }

    return 'button';
  }

  return (
    <button
      type="button"
      className={getColor(color)}
      onClick={() => action()}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'default',
};

export default Button;
