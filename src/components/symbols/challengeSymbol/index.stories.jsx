import React from 'react';
import { storiesOf } from '@storybook/react';

import ChallengeProposal from '.';

storiesOf('Symbols/Challenge Symbol', module)
  .add('Standard', () => <ChallengeProposal />)
  .add('Small', () => <ChallengeProposal small />);
