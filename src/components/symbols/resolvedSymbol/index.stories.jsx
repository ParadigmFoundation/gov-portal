import React from 'react';
import { storiesOf } from '@storybook/react';

import ResolvedSymbol from '.';

storiesOf('Symbols/Resolved Symbol', module)
  .add('Standard', () => <ResolvedSymbol />)
  .add('Small', () => <ResolvedSymbol small />);
