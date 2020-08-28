import React from 'react';
import { storiesOf } from '@storybook/react';
import projectsData from 'data/projects.json';
import Projects from '../components/Projects';

storiesOf('Projects', module).add('Projects', () => <Projects data={projectsData} />, {
  layout: 'centered',
});
