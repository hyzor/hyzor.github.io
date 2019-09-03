import { configure } from '@storybook/react';
import 'storybook-addon-material-ui/register';

const requireContext = require.context('../src', true, /.story.jsx/);

function loadStories() {
  // eslint-disable-next-line global-require
  require('../src/styles/index');
  requireContext.keys().forEach(filename => requireContext(filename));
}

configure(loadStories, module);
