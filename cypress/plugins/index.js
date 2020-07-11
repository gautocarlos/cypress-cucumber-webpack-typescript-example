const AllureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../webpack.config.js')
  };
  on('file:preprocessor', webpack(options));
  AllureWriter(on, config);
  return config;
};
