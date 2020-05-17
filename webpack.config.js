/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SETTINGS = require('./settings');

const production = process.env.NODE_ENV === 'production';
const analyzer = process.env.ANALYZE === '1';

const stylesLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        mode: 'local',
        localIdentName: production ? '[hash:base64:7]' : '[path]__[local]--[hash:base64:5]',
      },
    },
  },
  'postcss-loader',
  {
    loader: 'sass-loader',
    options: {
      prependData: '@import "styles/globals";',
      sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
      },
    },
  },
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
  },

  {
    test: /\.(css|scss)$/,
    include: path.join(__dirname, './src'),
    loader: production
      ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: stylesLoaders })
      : ['style-loader', ...stylesLoaders],
  },

  {
    // do not load styles as css modules from other directories (e.g. node_modules) but src
    test: /\.(css)$/,
    loaders: production
      ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      : ['style-loader', 'css-loader', 'postcss-loader'],
    exclude: path.resolve(__dirname, '../src'),
  },

  {
    test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
    loader: 'file-loader',
  },
];

const pluginsBase = [
  new HtmlWebpackPlugin({ template: 'template.ejs' }),
  new FaviconsWebpackPlugin(SETTINGS.FAVICONS),
  new BundleAnalyzerPlugin({ analyzerMode: analyzer ? 'server' : 'disabled' }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: 'static/' }, { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' }],
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: SETTINGS.PORT,
      proxy: `http://localhost:${SETTINGS.PORT}`,
      notify: false,
    },
    {
      reload: false,
    }
  ),
];

const productionPlugins = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [SETTINGS.PUBLIC_PATH],
  }),
  ...pluginsBase,
  new LodashModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurrenceOrderPlugin(),
];

module.exports = {
  devtool: production ? false : 'cheap-module-source-map',

  mode: production ? 'production' : 'development',

  optimization: {
    minimize: production,
  },

  entry: production
    ? path.join(__dirname, './src/index')
    : [
        `webpack-dev-server/client?http://localhost:${SETTINGS.PORT}`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, './src/index'),
      ],

  output: {
    path: SETTINGS.PUBLIC_PATH,
    filename: 'bundle.js',
    publicPath: '/',
    globalObject: 'this',
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: { rules },
  plugins: production ? productionPlugins : developmentPlugins,
};
