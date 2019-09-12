import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import Table from '../../../../components/table';
import EmptyState from '../../../../components/emptyState';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import Address from '../../../../components/address';
import ProposalSymbol from '../../../../components/symbols/proposalSymbol';
import ValidatorSymbol from '../../../../components/symbols/validatorSymbol';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';

import './index.scss';

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
      <tr key={pastChallenge.id}>
        <td>
          <NavLink to={`/past/${pastChallenge.id}`} className="past-challenges-view__id">
            {pastChallenge.id}
          </NavLink>
        </td>
        <td>
          <Address address={pastChallenge.challenger} short />
        </td>
        <td>
          {pastChallenge.status === 1 ? <ProposalSymbol /> : <ValidatorSymbol />}
        </td>
        <td>
          {pastChallenge.result === 'passed' ? <AcceptedSymbol /> : <RejectedSymbol />}
        </td>
        <td className="past-challenges-view__td">
          {numeral(pastChallenge.stakedBalance).format('0,0.[00]')}
        </td>
        <td className="past-challenges-view__td">
          {new Date(pastChallenge.challengeEnd * 1000).toLocaleString('default')}
        </td>
      </tr>
    ));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th className="past-challenges-view__th">
            ID
          </th>
          <th className="past-challenges-view__th">
            Challenger
          </th>
          <th className="past-challenges-view__th">
            Type
          </th>
          <th className="past-challenges-view__th">
            Result
          </th>
          <th className="past-challenges-view__th">
            Tokens at Stake
          </th>
          <th className="past-challenges-view__th">
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
