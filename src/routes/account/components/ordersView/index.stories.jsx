import React from 'react';
import { storiesOf } from '@storybook/react';

import OrdersView from '.';

const orders = [
  {
    orderId: '0x8976d8e86f1500008976d8e86f15906a8976d8e86f15000040dc8b020190ab56',
    type: 'Dharma',
    expiration: 1560371215,
  },
  {
    orderId: '0x20610504010a2be428610504010000002861050401000000701231030100e3ca',
    type: 'dY/dX',
    expiration: 1560356165,
  },
  {
    orderId: '0xb461050401000000701231030100000206e65d06205040100d46205040100e2b',
    type: '0x',
    expiration: 1560332518,
  },
  {
    orderId: '0x0b3d075500bb7c51cfa6c746599a223b153d8379ff22ee95c338d8e5c02eff1a',
    type: '0x',
    expiration: 1560359948,
  },
];

storiesOf('Routes/Account/OrdersView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <OrdersView />
    </div>
  ))
  .add('MetaMask connected but no data', () => (
    <div className="p-5">
      <OrdersView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and data', () => (
    <div className="p-5">
      <OrdersView
        metaMaskConnected
        orders={orders}
      />
    </div>
  ));
