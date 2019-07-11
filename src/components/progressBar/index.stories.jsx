import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressBar from '.';

storiesOf('Components/ProgressBar', module)
  .add('0%', () => (
    <div className="p-5">
      <ProgressBar />
    </div>
  ))
  .add('10%', () => (
    <div className="p-5">
      <ProgressBar value={10} />
    </div>
  ))
  .add('25%', () => (
    <div className="p-5">
      <ProgressBar value={25} />
    </div>
  ))
  .add('68%', () => (
    <div className="p-5">
      <ProgressBar value={68} />
    </div>
  ))
  .add('100%', () => (
    <div className="p-5">
      <ProgressBar value={100} />
    </div>
  ));
