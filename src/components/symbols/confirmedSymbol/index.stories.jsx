import React from 'react';
import { storiesOf } from '@storybook/react';

import ConfirmedSymbol from '.';

storiesOf('Symbols/Confirmed Symbol', module)
  .add('Standard', () => <ConfirmedSymbol />)
  .add('Small', () => <ConfirmedSymbol small />);
