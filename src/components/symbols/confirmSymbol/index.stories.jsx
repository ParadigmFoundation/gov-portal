import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ConfirmSymbol from '.';

storiesOf('Symbols/Confirm Symbol', module)
  .add('Standard', () => <ConfirmSymbol action={action('Clicked')} />)
  .add('Small', () => <ConfirmSymbol action={action('Clicked')} small />);
