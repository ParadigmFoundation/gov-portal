import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';

function OrdersView(props) {
  const {
    metaMaskConnected,
  } = props;

  return (
    <Table>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Type
          </th>
          <th>
            Expiration
          </th>
        </tr>
      </thead>
      <tbody>
        {!metaMaskConnected && (
          <tr>
            <td colSpan="6">
              <ConnectMetaMask
                text="Connect to MetaMask to see your orders."
                small
              />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

OrdersView.propTypes = {
  metaMaskConnected: PropTypes.bool,
};

OrdersView.defaultProps = {
  metaMaskConnected: false,
};

export default OrdersView;
