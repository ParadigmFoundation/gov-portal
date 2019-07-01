import React from 'react';
import { storiesOf } from '@storybook/react';

import ValidatorSymbol from '.';

storiesOf('Symbols/Validator Symbol', module)
  .add('Standard', () => <ValidatorSymbol />)
  .add('Small', () => <ValidatorSymbol small />);
