import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  Spinner,
} from 'reactstrap';

import './index.scss';

function Button(props) {
  const {
    text,
    action,
    color,
    block,
    small,
    disabled,
    isAsync,
    onceConfirmed,
  } = props;

  const [status, setStatus] = useState('');

  let classname = 'button';

  if (color === 'cancel') {
    classname += ' button--cancel';
  }

  if (color === 'remove') {
    classname += ' button--remove';
  }

  if (color === 'inverted') {
    classname += ' button--inverted';
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

  if (disabled) {
    classname += ' button--disabled';
  }

  if (block) {
    classname += ' button--block';
  }

  async function asyncFunc() {
    setStatus('loading');
    await action();
    setStatus('done');
    onceConfirmed();
  }

  function returnContent() {
    if (status === 'loading') {
      return <Spinner color="light" size="sm" />;
    }

    if (status === 'done') {
      return 'Done';
    }

    return text;
  }

  function clickButton() {
    if (isAsync && status === 'done') {
      return onceConfirmed();
    }

    if (isAsync) {
      return asyncFunc();
    }

    return action();
  }

  return (
    <button
      type="button"
      className={classname}
      onClick={() => clickButton()}
      disabled={disabled}
    >
      {returnContent()}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  color: PropTypes.string,
  block: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  isAsync: PropTypes.bool,
  onceConfirmed: PropTypes.func,
};

Button.defaultProps = {
  color: 'default',
  block: false,
  action: () => {},
  small: false,
  disabled: false,
  isAsync: false,
  onceConfirmed: () => {},
};

export default Button;
