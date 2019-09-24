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
    const nRows = Math.ceil(proposals.length / 3);

    const content = [];

    for (let i = 0; i < nRows; i += 1) {
      const id = i * 3;

      const data = proposals.slice(id, id + 3);
      const cols = [];

      for (let j = 0; j < data.length; j += 1) {
        cols.push(
          <Col key={data[j].id} xs={12} sm={12} md={4} className="py-3">
            <ActiveProposalCard
              key={data[j].id}
              id={data[j].id}
              owner={data[j].owner}
              stakeSize={numeral(data[j].stakeSize).format('0,0.[00]')}
              dailyReward={numeral(data[j].dailyReward).format('0,0.[00]')}
              power={data[j].power}
              acceptUnix={data[j].acceptUnix}
            />
          </Col>,
        );
      }

      content.push(
        <Row key={`p${i}`}>
          {cols}
        </Row>,
      );
    }

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
