import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';
import ZeroExSymbol from '../../../../components/symbols/zeroExSymbol';
import DydxSymbol from '../../../../components/symbols/dydxSymbol';
import DharmaSymbol from '../../../../components/symbols/dharmaSymbol';

import './index.scss';

function OrdersView(props) {
  const {
    metaMaskConnected,
    orders,
  } = props;

  function returnTypeSymbol(type) {
    if (type === '0x') {
      return <ZeroExSymbol />;
    }

    if (type === 'dY/dX') {
      return <DydxSymbol />;
    }

    if (type === 'Dharma') {
      return <DharmaSymbol />;
    }

    return 'Unknown type';
  }

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
              text="No data found"
              small
            />
          </td>
        </tr>
      );
    }

    return orders.map(order => (
      <tr key={order.orderId}>
        <td className="orders-view__id">
          {`${order.orderId.substring(0, 18)}...`}
        </td>
        <td>
          {returnTypeSymbol(order.type)}
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
            Type
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
