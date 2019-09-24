import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Row,
  Col,
} from 'reactstrap';

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

  function returnActiveProposals() {
    const cols = [];

    for (let i = 0; i < proposals.length; i += 1) {
      cols.push(
        <Col key={proposals[i].id} xs={12} sm={12} md={6} lg={4} className="py-3">
          <ActiveProposalCard
            key={proposals[i].id}
            id={proposals[i].id}
            owner={proposals[i].owner}
            stakeSize={numeral(proposals[i].stakeSize).format('0,0.[00]')}
            dailyReward={numeral(proposals[i].dailyReward).format('0,0.[00]')}
            power={proposals[i].power}
            acceptUnix={proposals[i].acceptUnix}
          />
        </Col>,
      );
    }

    return (
      <Row>
        {cols}
      </Row>
    );
  }

  return returnActiveProposals();
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
