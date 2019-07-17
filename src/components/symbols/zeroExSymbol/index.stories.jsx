import React from 'react';
import { storiesOf } from '@storybook/react';

import ZeroExSymbol from '.';

storiesOf('Symbols/0x Symbol', module)
  .add('Standard', () => <ZeroExSymbol />);
