import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import centered from '@storybook/addon-centered/react';
import theme from 'styles/theme';
import Contact from '../components/Contact';

storiesOf('Contact', module)
  .addDecorator(muiTheme(theme))
  .addDecorator(centered)
  .add('Contact', () => <Contact />);
