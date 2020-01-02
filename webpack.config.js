const path = require ('path');

const config = {
  entry: path.resolve ('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve ('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
