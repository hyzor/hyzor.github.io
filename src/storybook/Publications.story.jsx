import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import centered from '@storybook/addon-centered/react';
import theme from 'styles/theme';
import publicationsData from 'data/publications.json';
import Publications from '../components/Publications';

storiesOf('Publications', module)
  .addDecorator(muiTheme(theme))
  .addDecorator(centered)
  .add('Publications', () => <Publications data={publicationsData.data} />);
