import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderView from '.';

storiesOf('Components/Header', module)
  .add('Standard', () => <HeaderView balance="20.0086" address="0x123456...56789" />);
