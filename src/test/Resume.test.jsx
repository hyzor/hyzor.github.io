import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import Resume from '../components/Resume';

describe('Resume component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Resume />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
