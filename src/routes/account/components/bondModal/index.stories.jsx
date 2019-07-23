import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BondModal from '.';

storiesOf('Routes/Account/BondModal', module)
  .add('Standard without current bond', () => (
    <BondModal
      toggle={action('toggle')}
      isOpen
      close={action('close')}
      limit="5025"
      confirm={action('confirm')}
    />
  ))
  .add('Standard with current bond', () => (
    <BondModal
      currentBond="12"
      toggle={action('toggle')}
      isOpen
      close={action('close')}
      limit="5025"
      confirm={action('confirm')}
    />
  ));
