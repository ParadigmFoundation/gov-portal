import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ValidatorChallengeModal from '.';

storiesOf('ValidatorChallengeModal', module)
  .add('Standard', () => (
    <div className="p-5">
      <ValidatorChallengeModal
        price={23789}
        close={action('close')}
        challenge={action('challenge')}
        isOpen
      />
    </div>
  ));
