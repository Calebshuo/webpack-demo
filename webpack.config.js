const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
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
       }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  }),new CleanWebpackPlugin('./dist')]
};