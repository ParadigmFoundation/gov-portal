import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    text,
    action,
    color,
    block,
  } = props;

  let classname = 'button';

  if (color === 'inverted') {
    classname += ' button button--inverted';
  }

  if (color === 'red') {
    classname += ' button--red';
  }

  if (color === 'green') {
    classname += ' button--green';
  }

  if (block) {
    classname += ' button--block';
  }

  return (
    <button
      type="button"
      className={classname}
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
  block: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  block: false,
};

export default Button;
