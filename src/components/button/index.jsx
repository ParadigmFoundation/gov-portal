import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Button(props) {
  const {
    text,
    action,
    color,
    block,
    small,
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

  if (color === 'outlined') {
    classname += ' button--outlined';
  }

  if (color === 'outlined-green') {
    classname += ' button--outlined-green';
  }

  if (small) {
    classname += ' button--small';
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
  action: PropTypes.func,
  color: PropTypes.string,
  block: PropTypes.bool,
  small: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  block: false,
  action: () => {},
  small: false,
};

export default Button;
