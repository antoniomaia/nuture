const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['components']: path.resolve(__dirname, './src/components'),
    ['pages']: path.resolve(__dirname, './src/pages'),
    ['constants']: path.resolve(__dirname, './src/constants'),
    ['slices']: path.resolve(__dirname, './src/slices'),
    ['theme']: path.resolve(__dirname, './src/theme'),
    ['store']: path.resolve(__dirname, './src/store'),
    ['src']: path.resolve(__dirname, './src'),
  })
);
