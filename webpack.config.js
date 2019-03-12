const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js', // {main:'./src/index.js'}默认output输出的文件是main.js，自定义名字是bundle.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: {
           loader: 'url-loader',
           options: {
             // placeholder
             name: '[name]_[hash].[ext]',
             limit: 20480 // 大于20kb图片不会被打包进js文件里
           }
         }
       },
       {
        test: /\.scss$/,
        use: ['style-loader',
              {
                loader:'css-loader',
                options: {
                  importLoaders: 2,
                  modules: true // css模块化
                }
              },
              'sass-loader',
              'postcss-loader'
            ]
       },
       {
        test: /\.css$/,
        use: ['style-loader',
              'css-loader',
              'postcss-loader'
            ]
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin('./dist'),
    new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
  }
};