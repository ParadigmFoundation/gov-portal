import React from 'react';
import { storiesOf } from '@storybook/react';

import ConfirmSymbol from '.';

storiesOf('Symbols/Confirm Symbol', module)
  .add('Standard', () => <ConfirmSymbol />)
  .add('Small', () => <ConfirmSymbol small />);
