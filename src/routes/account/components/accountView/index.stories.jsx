import React from 'react';
import { storiesOf } from '@storybook/react';

import AccountView from '.';

storiesOf('Routes/Account/AccountView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <AccountView />
    </div>
  ))
  .add('MetaMask connected', () => (
    <div className="p-5">
      <AccountView
        metaMaskConnected
      />
    </div>
  ));
