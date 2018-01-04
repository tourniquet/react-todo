const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'js/bundle.js',
    sourceMapFilename: 'js/bundle.map'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    port: 8080
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react']
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}
