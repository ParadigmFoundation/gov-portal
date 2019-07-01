import React from 'react';
import { storiesOf } from '@storybook/react';

import AcceptedSymbol from '.';

storiesOf('Symbols/Accepted Symbol', module)
  .add('Standard', () => <AcceptedSymbol />)
  .add('Small', () => <AcceptedSymbol small />);
