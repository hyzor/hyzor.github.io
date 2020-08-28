/* eslint-disable import/no-extraneous-dependencies */

// your app's webpack.config.js
const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        modules: custom.resolve.modules,
        extensions: custom.resolve.extensions,
        alias: custom.resolve.alias,
      },
      plugins: config.plugins.concat(custom.plugins),
    };
  },
};
