import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ManageTreasuryModal from '.';

storiesOf('Routes/Account/ManageTreasuryModal', module)
  .add('Standard', () => (
    <ManageTreasuryModal
      isOpen
      edit={action('edit')}
      remove={action('remove')}
      close={action('close')}
    />
  ));
