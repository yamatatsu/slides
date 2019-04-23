const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.json'],
  },
  plugins: [
    new webpack.IgnorePlugin(/^fs$/),
    new MonacoWebpackPlugin({
      languages: ['typescript'],
    }),
  ],
}
