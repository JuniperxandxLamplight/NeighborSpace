const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      };

      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      minify: {
       removeComments: true,
       collapseWhitespace: true
      }
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/contact.html',
      filename: 'contact.html',
      minify: {
       removeComments: true,
       collapseWhitespace: true
      }
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/sign-up.html',
      filename: 'sign-up.html',
      minify: {
       removeComments: true,
       collapseWhitespace: true
      }
    }),

    new UglifyJsPlugin(),

    new CleanWebpackPlugin(['dist'])

  ]

};
