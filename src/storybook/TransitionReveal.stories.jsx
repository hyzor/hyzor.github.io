import React from 'react';
import { storiesOf } from '@storybook/react';
import TransitionReveal from '../components/TransitionReveal';

storiesOf('TransitionReveal', module).add(
  'TransitionReveal',
  () => (
    <TransitionReveal>
      <span>Dummy text</span>
    </TransitionReveal>
  ),
  { layout: 'centered' },
);
