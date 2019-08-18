import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import EmptyState from '../../../../components/emptyState';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import Address from '../../../../components/address';

import {
  timestampToAge,
} from '../../../../utils/formatting';

function ValidatorsView(props) {
  const {
    metaMaskConnected,
    validators,
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

    if (validators.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <EmptyState />
          </td>
        </tr>
      );
    }

    return validators.map(validator => (
      <tr key={validator.owner}>
        <td>
          <NavLink to={`/validator/${validator.id}`}>
            <Address address={validator.owner} icon short />
          </NavLink>
        </td>
        <td>
          {validator.stakeSize}
        </td>
        <td>
          {validator.dailyReward}
        </td>
        <td>
          {`${validator.power.substring(0, 5)}%`}
        </td>
        <td>
          N/A
        </td>
        <td>
          {timestampToAge(validator.confirmationUnix)}
        </td>
      </tr>
    ));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Address
          </th>
          <th>
            Stake
          </th>
          <th>
            Daily Reward
          </th>
          <th>
            Voting Power
          </th>
          <th>
            Uptime
          </th>
          <th>
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        {displayContent()}
      </tbody>
    </Table>
  );
}

ValidatorsView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.object),
};

ValidatorsView.defaultProps = {
  metaMaskConnected: false,
  validators: [],
};

export default ValidatorsView;
