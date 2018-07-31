const { resolve } = require('path');

module.exports = function module(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    options: moduleOptions
  });
};
