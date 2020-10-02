import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import Projects from '../components/Projects';

describe('Projects component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Projects data={null} />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
