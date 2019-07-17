import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import EmptyState from '../../../../components/emptyState';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import Address from '../../../../components/address';
import ProposalSymbol from '../../../../components/symbols/proposalSymbol';
import ValidatorSymbol from '../../../../components/symbols/validatorSymbol';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';

function PastChallengesView(props) {
  const {
    metaMaskConnected,
    pastChallenges,
  } = props;

  function displayContent() {
    if (!metaMaskConnected) {
      return (
        <tr>
          <td colSpan="6">
            <ConnectMetaMask />
          </td>
        </tr>
      );
    }

    if (pastChallenges.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <EmptyState />
          </td>
        </tr>
      );
    }

    return pastChallenges.map(pastChallenge => (
      <tr>
        <td>
          {pastChallenge.id}
        </td>
        <td>
          <Address address={pastChallenge.challenger} short />
        </td>
        <td>
          {pastChallenge.challengeType === 'proposal' ? <ProposalSymbol /> : <ValidatorSymbol />}
        </td>
        <td>
          {pastChallenge.result === 'passed' ? <AcceptedSymbol /> : <RejectedSymbol />}
        </td>
        <td>
          {pastChallenge.stakedBalance}
        </td>
        <td>
          {pastChallenge.challengeEnd}
        </td>
      </tr>
    ));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Challenger
          </th>
          <th>
            Type
          </th>
          <th>
            Result
          </th>
          <th>
            Tokens at Stake
          </th>
          <th>
            Time
          </th>
        </tr>
      </thead>
      <tbody>
        {displayContent()}
      </tbody>
    </Table>
  );
}

PastChallengesView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  pastChallenges: PropTypes.arrayOf(PropTypes.object),
};

PastChallengesView.defaultProps = {
  metaMaskConnected: false,
  pastChallenges: [],
};

export default PastChallengesView;
