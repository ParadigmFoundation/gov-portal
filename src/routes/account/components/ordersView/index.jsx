import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';

import './index.scss';

function OrdersView(props) {
  const {
    metaMaskConnected,
    orders,
  } = props;

  function displayContent() {
    if (!metaMaskConnected) {
      return (
        <tr>
          <td colSpan="6">
            <ConnectMetaMask
              text="Connect to MetaMask to see your orders."
              small
            />
          </td>
        </tr>
      );
    }

    if (orders.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <EmptyState
              text="No orders found."
              small
            />
          </td>
        </tr>
      );
    }

    return orders.map(order => (
      <tr key={order.orderId}>
        <td className="orders-view__id">
          <a
            className="orders-view__link"
            href={`https://orders-api.kosu.io/order?id=${order.orderId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {order.orderId}
          </a>
        </td>
        <td className="orders-view__expiration">
          {new Date(order.expiration * 1000).toLocaleString()}
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
            Expiration
          </th>
        </tr>
      </thead>
      <tbody>
        {displayContent()}
      </tbody>
    </Table>
  );
}

OrdersView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  orders: PropTypes.arrayOf(PropTypes.object),
};

OrdersView.defaultProps = {
  metaMaskConnected: false,
  orders: [],
};

export default OrdersView;
