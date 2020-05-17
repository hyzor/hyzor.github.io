import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import centered from '@storybook/addon-centered/react';
import theme from 'styles/theme';
import projectsData from 'data/projects.json';
import Projects from '../components/Projects';

storiesOf('Projects', module)
  .addDecorator(muiTheme(theme))
  .addDecorator(centered)
  .add('Projects', () => <Projects data={projectsData} />);
