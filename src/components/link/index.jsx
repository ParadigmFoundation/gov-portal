import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import './index.scss';

function Link(props) {
  const {
    text,
    to,
    color,
    block,
    small,
    disabled,
  } = props;

  let classname = 'link';

  if (color === 'cancel') {
    classname += ' button--cancel';
  }

  if (color === 'inverted') {
    classname += ' link link--inverted';
  }

  if (color === 'red') {
    classname += ' link--red';
  }

  if (color === 'green') {
    classname += ' link--green';
  }

  if (color === 'outlined') {
    classname += ' link--outlined';
  }

  if (color === 'outlined-green') {
    classname += ' link--outlined-green';
  }

  if (small) {
    classname += ' link--small';
  }

  if (disabled) {
    classname += ' link--disabled';
  }

  if (block) {
    classname += ' link--block';
  }

  return (
    <NavLink
      to={to}
      activeClassName={classname}
      className={classname}
    >
      {text}
    </NavLink>
  );
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  block: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  color: 'default',
  block: false,
  small: false,
  disabled: false,
};

export default Link;
