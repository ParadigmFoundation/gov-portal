import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ProposalChallengeModal from '.';

storiesOf('ProposalChallengeModal', module)
  .add('Standard', () => (
    <div className="p-5">
      <ProposalChallengeModal
        price={23789}
        close={action('close')}
        challenge={action('challenge')}
        isOpen
      />
    </div>
  ));
