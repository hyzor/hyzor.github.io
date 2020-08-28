/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

require('../src/styles/index');

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
