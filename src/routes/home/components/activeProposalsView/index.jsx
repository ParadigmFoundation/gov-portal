import React from 'react';
import PropTypes from 'prop-types';

import EmptyState from '../../../../components/emptyState';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import ActiveProposalCard from '../../../../components/activeProposalCard';

function ActiveProposalsView(props) {
  const {
    metaMaskConnected,
    proposals,
  } = props;

  if (!metaMaskConnected) {
    return <ConnectMetaMask />;
  }

  if (proposals.length === 0) {
    return <EmptyState />;
  }

  return proposals.map(proposal => (
    <ActiveProposalCard
      id={proposal.id}
      owner={proposal.owner}
      stakeSize={proposal.stakeSize}
      dailyReward={proposal.dailyReward}
      power={proposal.power}
      acceptUnix={proposal.acceptUnix}
    />
  ));
}

ActiveProposalsView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  proposals: PropTypes.arrayOf(PropTypes.object),
};

ActiveProposalsView.defaultProps = {
  metaMaskConnected: false,
  proposals: [],
};

export default ActiveProposalsView;
