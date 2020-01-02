const path = require ('path');

const config = {
  entry: path.resolve ('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]',
            limit: 10000,
          },
        },
      },
    ],
  },
  watch: true,
};

module.exports = config;
