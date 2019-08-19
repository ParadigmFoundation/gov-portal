import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

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
      key={proposal.id}
      id={proposal.id}
      owner={proposal.owner}
      stakeSize={numeral(proposal.stakeSize).format('0,0.0')}
      dailyReward={numeral(proposal.dailyReward).format('0,0.0')}
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
