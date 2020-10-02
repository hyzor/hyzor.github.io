/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackConfig = require('../webpack.config');
const SETTINGS = require('../settings');

const serverConfig = {
  contentBase: SETTINGS.PUBLIC_PATH,
  publicPath: '/',
  stats: { colors: true },
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
};

new WebpackDevServer(webpack(webpackConfig), serverConfig).listen(
  SETTINGS.PORT,
  'localhost',
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`
        Listening at ${chalk.bold.cyan(`http://localhost:${SETTINGS.PORT}/`)}.
        Serving files from ${chalk.bold.cyan(SETTINGS.PUBLIC_PATH)}.
        Default browser will be opened automatically when Webpack has finished building.
      `);
    }
  },
);
