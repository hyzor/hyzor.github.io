import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import Publications from '../components/Publications';

describe('Publications component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Publications data={null} />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
