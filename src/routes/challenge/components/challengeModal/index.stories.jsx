import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChallengeModal from '.';

storiesOf('ChallengeModal', module)
  .add('Standard', () => (
    <div className="p-5">
      <ChallengeModal
        address="0x12345567890"
        close={action('Close')}
        confirmVote={action('Confirm vote')}
        isOpen
      />
    </div>
  ));
