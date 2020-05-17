import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import centered from '@storybook/addon-centered/react';
import theme from 'styles/theme';
import projectsData from 'data/projects.json';
import ProjectModal from '../components/ProjectModal';

const project = projectsData.data.projects[0];

storiesOf('ProjectModal', module)
  .addDecorator(muiTheme(theme))
  .addDecorator(centered)
  .add('ProjectModal', () => <ProjectModal project={project} openProject={project.id} />);
