import React from 'react';
import { storiesOf } from '@storybook/react';

import RejectedSymbol from '.';

storiesOf('Symbols/Rejected Symbol', module)
  .add('Standard', () => <RejectedSymbol />)
  .add('Small', () => <RejectedSymbol small />);
