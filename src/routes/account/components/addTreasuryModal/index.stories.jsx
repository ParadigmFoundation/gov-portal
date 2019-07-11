import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddTreasuryMondal from '.';

storiesOf('Routes/Account/AddTreasuryMondal', module)
  .add('Standard', () => (
    <AddTreasuryMondal
      isOpen
      add={action('add')}
      close={action('close')}
    />
  ));
