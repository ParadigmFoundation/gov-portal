import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';

import './index.scss';

function GovernanceActivityView(props) {
  const {
    metaMaskConnected,
    activities,
  } = props;

  function displayContent() {
    if (!metaMaskConnected) {
      return (
        <tr>
          <td colSpan="6">
            <ConnectMetaMask
              text="Connect to MetaMask to see your activity."
              small
            />
          </td>
        </tr>
      );
    }

    if (activities.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <EmptyState
              text="No data found"
              small
            />
          </td>
        </tr>
      );
    }

    return activities.map(activity => (
      <tr>
        <td className="governance-activity-view__description">
          {activity.title}
        </td>
        <td>
          {activity.type}
        </td>
        <td>
          {activity.result}
        </td>
        <td>
          {activity.action}
        </td>
      </tr>
    ));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Description
          </th>
          <th>
            Type
          </th>
          <th>
            Result
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {displayContent()}
      </tbody>
    </Table>
  );
}

GovernanceActivityView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  activities: PropTypes.arrayOf(PropTypes.object),
};

GovernanceActivityView.defaultProps = {
  metaMaskConnected: false,
  activities: [],
};

export default GovernanceActivityView;
