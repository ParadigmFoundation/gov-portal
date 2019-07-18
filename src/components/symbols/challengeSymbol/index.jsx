import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ChallengeProposal(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'challenge-symbol' : 'challenge-symbol challenge-symbol--small'}>
      Challenge
    </div>
  );
}

ChallengeProposal.propTypes = {
  small: PropTypes.bool,
};

ChallengeProposal.defaultProps = {
  small: false,
};

export default ChallengeProposal;
