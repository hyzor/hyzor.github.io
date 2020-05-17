import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

import TransitionReveal from '../components/TransitionReveal';

describe('TransitionReveal component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <TransitionReveal>
          <div />
        </TransitionReveal>
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
