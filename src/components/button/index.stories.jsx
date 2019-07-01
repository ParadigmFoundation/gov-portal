import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

storiesOf('Components/Button', module)
  .add('Standard', () => <Button text="View" action={action('clicked')} />)
  .add('Standard Block', () => <Button text="View" action={action('clicked')} block />)
  .add('Inverted', () => <Button text="View" action={action('clicked')} color="inverted" />)
  .add('Red', () => <Button text="Challenge proposal" action={action('clicked')} color="red" />)
  .add('Green', () => <Button text="Challenge proposal" action={action('clicked')} color="green" />);
