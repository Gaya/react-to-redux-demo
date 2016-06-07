var path = require('path');

module.exports = {
  entry: {
    app: ['./react-no-redux/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
};
