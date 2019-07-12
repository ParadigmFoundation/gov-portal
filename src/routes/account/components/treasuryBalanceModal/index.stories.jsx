import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TreasuryBalanceModal from '.';

storiesOf('Routes/Account/TreasuryBalanceModal', module)
  .add('Standard', () => (
    <TreasuryBalanceModal
      isOpen
      currentBalance={2500}
      close={action('close')}
      updateBalance={action('Update balance')}
    />
  ));
