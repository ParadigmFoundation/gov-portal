import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TreasuryBalanceModal from '.';

storiesOf('Routes/Account/TreasuryBalanceModal', module)
  .add('Standard', () => (
    <TreasuryBalanceModal
      toggle={action('Toggle')}
      isOpen
      currentBalance="2500"
      updateBalance={action('Update balance')}
    />
  ));
