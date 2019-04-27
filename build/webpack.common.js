const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  // 路径是默认从webpack-demo开始的，所以上面路径不能写成'../src/index.js'
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      // CleanWebpackPlugin默认会认为build文件夹就是根目录，不允许删除根目录以外的目录，所以不可以直接写../dist。所以需要配置根路径让插件知道上一级目录才是根路径。
      new CleanWebpackPlugin('./dist', {
        root: path.resolve(__dirname, '../')
      }),
      // new BundleAnalyzerPlugin()
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: { // 如果是node_modules里面的文件就打包到code.js里面去，如果不是就走default（打包到codespliting.js里面去）。
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10, // 判断优先级。数值越大优先级越高。
            // filename: 'vendors.js'
            name: 'nodemodules'
          },
          default: {
            // filename:'codespliting.js',
            priority: -20,
            reuseExistingChunk: true // 如果一个模块被打包过了，那么我就忽略这个模块直接去使用之前已经打包过的代码。
          }
        }
      }
    }
}