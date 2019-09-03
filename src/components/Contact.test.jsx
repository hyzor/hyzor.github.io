import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import Contact from './Contact';

describe('Contact component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
