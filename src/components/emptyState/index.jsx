import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function EmptyState(props) {
  const {
    small,
    text,
  } = props;

  return (
    <div className={small ? 'empty-state empty-state--small' : 'empty-state'}>
      {text}
    </div>
  );
}

EmptyState.propTypes = {
  small: PropTypes.bool,
  text: PropTypes.string,
};

EmptyState.defaultProps = {
  small: false,
  text: 'Nothing to display.',
};

export default EmptyState;
