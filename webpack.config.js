const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'js/bundle.js',
    sourceMapFilename: 'js/bundle.map'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loaders: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    })
  ]
}
