import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function ProposalSymbol(props) {
  const {
    small,
  } = props;

  return (
    <div className={!small ? 'proposal-symbol' : 'proposal-symbol proposal-symbol--small'}>
      Proposal
    </div>
  );
}

ProposalSymbol.propTypes = {
  small: PropTypes.bool,
};

ProposalSymbol.defaultProps = {
  small: false,
};

export default ProposalSymbol;
