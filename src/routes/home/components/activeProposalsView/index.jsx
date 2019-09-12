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
    const length = proposals.length - (proposals.length % 3);

    const content = [];

    for (let i = 0; i < length; i += 3) {
      const cols = [];

      for (let j = 0; j < 3; j += 1) {
        cols.push(
          <Col key={i + j} xs={12} sm={12} md={4} className="py-3">
            <ActiveProposalCard
              key={proposals[i + j].id}
              id={proposals[i + j].id}
              owner={proposals[i + j].owner}
              stakeSize={numeral(proposals[i + j].stakeSize).format('0,0.[00]')}
              dailyReward={numeral(proposals[i + j].dailyReward).format('0,0.[00]')}
              power={proposals[i + j].power}
              acceptUnix={proposals[i + j].acceptUnix}
            />
          </Col>,
        );
      }

      content.push(
        <Row key="pe">
          {cols}
        </Row>,
      );
    }

    const lastLength = proposals.length - length;
    const cols = [];

    for (let i = 0; i < lastLength; i += 1) {
      cols.push(
        <Col key={i} xs={12} sm={12} md={4} className="py-3">
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

    content.push(
      <Row key="ple">
        {cols}
      </Row>,
    );

    return content;
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
