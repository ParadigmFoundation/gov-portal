import React from 'react';
import { storiesOf } from '@storybook/react';

import EmptyState from '.';

storiesOf('Components/EmptyState', module)
  .add('Standard', () => (
    <div className="p-5">
      <EmptyState />
    </div>
  ))
  .add('Small', () => (
    <div className="p-5">
      <EmptyState small />
    </div>
  ));
