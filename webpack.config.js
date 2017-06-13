var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/,
				use: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules/')
			},
      { test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
      { test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          sassLoader: {
            includePaths: [
              path.resolve(__dirname, './node_modules/foundation-sites/scss')
            ]
          }
      }
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    extensions: [".jsx", ".js", "scss"],
  }
}
