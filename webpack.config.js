const path = require ('path');
const webpack = require ('webpack');
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
  plugins: [new webpack.BannerPlugin ('myh fly fly fly')], //bundle头部添加
  watch: true,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
};

module.exports = config;
