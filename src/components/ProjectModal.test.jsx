import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import projectsData from 'data/projects.json';

import ProjectModal from './ProjectModal';

describe('data/projects.json', () => {
  it('contains an array of objects matching intended shape', () => {
    const data = projectsData.data.projects;
    expect(Array.isArray(data)).toEqual(true); // Could further expand test to include complete shape
  });
});

describe('ProjectModal component test with Enzyme', () => {
  it('renders without crashing', () => {
    const project = projectsData.data[0];

    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <ProjectModal project={project} />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
