import React from 'react';
import { storiesOf } from '@storybook/react';
import projectsData from 'data/projects.json';
import ProjectModal from '../components/ProjectModal';

const project = projectsData.data.projects[0];

storiesOf('ProjectModal', module).add(
  'ProjectModal',
  () => <ProjectModal project={project} openProject={project.id} />,
  { layout: 'centered' },
);
