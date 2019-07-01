import React from 'react';
import { storiesOf } from '@storybook/react';

import ProposalSymbol from '.';

storiesOf('Symbols/Proposal Symbol', module)
  .add('Standard', () => <ProposalSymbol />)
  .add('Small', () => <ProposalSymbol small />);
