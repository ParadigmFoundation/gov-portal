import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('Components/Header', module)
  .add('Standard', () => <Header balance="20.0086" address="0x123456...56789" />);
