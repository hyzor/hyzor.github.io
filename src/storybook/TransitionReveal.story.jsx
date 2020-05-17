import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import centered from '@storybook/addon-centered/react';
import theme from 'styles/theme';
import TransitionReveal from '../components/TransitionReveal';

storiesOf('TransitionReveal', module)
  .addDecorator(muiTheme(theme))
  .addDecorator(centered)
  .add('TransitionReveal', () => (
    <TransitionReveal>
      <span>Dummy text</span>
    </TransitionReveal>
  ));
