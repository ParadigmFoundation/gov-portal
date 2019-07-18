import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResolveSymbol from '.';

storiesOf('Symbols/Resolve Symbol', module)
  .add('Standard', () => <ResolveSymbol action={action('Clicked')} />)
  .add('Small', () => <ResolveSymbol action={action('Clicked')} small />);
