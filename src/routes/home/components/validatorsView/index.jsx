import React, {
  useState,
} from 'react';
import {
  NavLink,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import numeral from 'numeral';

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

  const [redirectTo, setRedirectTo] = useState();

  function redirect() {
    if (redirectTo) {
      return <Redirect push to={`/validator/${redirectTo}`} />;
    }
  }

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
      <tr key={validator.owner} onClick={() => setRedirectTo(validator.id)}>
        <td>
          <Address address={validator.owner} icon short />
        </td>
        <td>
          {numeral(validator.stakeSize).format('0,0.[00]')}
        </td>
        <td>
          {numeral(validator.dailyReward).format('0,0.[00]')}
        </td>
        <td>
          {`${numeral(validator.power).format('0,0.[00]')}%`}
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
    <>
      {redirect()}
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
    </>
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
