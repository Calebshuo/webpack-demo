const path = require('path')
const CopyrightWebpackPlugin = require('./plugin/copyright-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist')
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'caleb'
    })
  ]
}