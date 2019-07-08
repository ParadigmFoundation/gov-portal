import React from 'react';
import { storiesOf } from '@storybook/react';

import ConnectMetamask from '.';

storiesOf('Components/ConnectMetamask', module)
  .add('Standard', () => (
    <div className="p-5">
      <ConnectMetamask />
    </div>
  ))
  .add('Small', () => (
    <div className="p-5">
      <ConnectMetamask small />
    </div>
  ));
