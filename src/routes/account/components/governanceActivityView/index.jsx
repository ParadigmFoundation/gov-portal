import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';

function GovernanceActivityView(props) {
  const {
    metaMaskConnected,
  } = props;

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
        {!metaMaskConnected && (
          <tr>
            <td colSpan="6">
              <ConnectMetaMask
                text="Connect to MetaMask to see your activity."
                small
              />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

GovernanceActivityView.propTypes = {
  metaMaskConnected: PropTypes.bool,
};

GovernanceActivityView.defaultProps = {
  metaMaskConnected: false,
};

export default GovernanceActivityView;
