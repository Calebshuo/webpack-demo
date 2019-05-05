const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['lodash'],
    react: ['react'],
    reactDom: ['react-dom']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname,'../dll'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致（小书）
      name: '[name]',
			path: path.resolve(__dirname, '../dll/[name].manifest.json'),
    })
  ]
}