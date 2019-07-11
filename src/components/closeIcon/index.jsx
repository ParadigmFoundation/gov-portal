import React from 'react';
import PropTypes from 'prop-types';

import CloseIconSrc from '../../assets/img/cross.png';

import './index.scss';

function CloseIcon(props) {
  const {
    action,
  } = props;

  return (
    <div
      onClick={() => action()}
      onKeyPress={() => action()}
      role="button"
      tabIndex={0}
    >
      <img
        src={CloseIconSrc}
        alt="Close"
        className="close-icon"
      />
    </div>
  );
}

CloseIcon.propTypes = {
  action: PropTypes.func.isRequired,
};

export default CloseIcon;
