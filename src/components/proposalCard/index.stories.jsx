import React from 'react';
import { storiesOf } from '@storybook/react';

import ProposalCard from '.';

storiesOf('Proposal Card', module)
  .add('Standard', () => <ProposalCard />);
