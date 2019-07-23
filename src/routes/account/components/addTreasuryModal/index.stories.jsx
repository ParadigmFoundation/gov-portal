import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddTreasuryModal from '.';

storiesOf('Routes/Account/AddTreasuryModal', module)
  .add('Standard', () => (
    <AddTreasuryModal
      isOpen
      add={action('add')}
      close={action('close')}
    />
  ));
