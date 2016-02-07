const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')


const TARGET = process.env.npm_lifecycle_event
const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build')
}

const common = {
  entry: PATHS.src, 
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path:PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    { 
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', 
      query: {
        presets: ['react', 'es2015', 'stage-1', 'stage-2', 'react-hmre']
      }
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css']
    }
    ]
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      devtool: 'source-map',
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}