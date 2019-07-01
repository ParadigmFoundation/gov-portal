import React from 'react';
import { storiesOf } from '@storybook/react';

import Address from '.';

storiesOf('Components/Address', module)
  .add('Standard without icon', () => <Address address="0x3E08FC7Cb11366c6E0091fb0fD64E0E5F8190bCa" />)
  .add('Standard with icon', () => <Address address="0x3E08FC7Cb11366c6E0091fb0fD64E0E5F8190bCa" icon />)
  .add('Short without icon', () => <Address address="0x3E08FC7Cb11366c6E0091fb0fD64E0E5F8190bCa" short />)
  .add('Short with icon', () => <Address address="0x3E08FC7Cb11366c6E0091fb0fD64E0E5F8190bCa" short icon />);
