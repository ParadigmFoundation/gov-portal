import React from 'react';
import { storiesOf } from '@storybook/react';

import ProposalView from '.';

storiesOf('ProposalView', module)
  .add('Standard', () => <ProposalView />);
