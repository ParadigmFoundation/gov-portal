import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TokensView from '.';

storiesOf('Routes/Account/TokensView', module)
  .add('Wihout allowance', () => (
    <TokensView
      treasuryAllowance="0"
    />
  ))
  .add('with allowance', () => (
    <TokensView
      treasuryAllowance="1"
    />
  ));
