/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const stylesLoaders = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        mode: 'local',
        localIdentName: '[path]__[local]--[hash:base64:5]',
      },
    },
  },
  'postcss-loader',
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        data: '@import "styles/globals";', // Seems to be broken as of now
        includePaths: [path.join(__dirname, '../src')],
      },
    },
  },
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: stylesLoaders,
        include: path.resolve(__dirname, '../src'),
      },

      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: path.resolve(__dirname, '../src'),
      },

      {
        test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [new OpenBrowserPlugin({ url: 'http://localhost:9001' })],

  resolve: {
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
