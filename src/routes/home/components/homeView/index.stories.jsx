import React from 'react';
import { storiesOf } from '@storybook/react';

import HomeView from '.';

storiesOf('HomeView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <HomeView />
    </div>
  ));
