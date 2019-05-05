const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const fs = require('fs')

const makePlugins = (configs) => {
  const plugins = [
    // CleanWebpackPlugin默认会认为build文件夹就是根目录，不允许删除根目录以外的目录，所以不可以直接写../dist。所以需要配置根路径让插件知道上一级目录才是根路径。
    new CleanWebpackPlugin('./dist', {
      root: path.resolve(__dirname, '../')
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // })
  ]
  Object.keys(configs.entry).forEach(v => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: `${v}.html`,
        chunks: ['runtime', 'nodemodules', v]
      })
    )
  })
  const files = fs.readdirSync(path.resolve(__dirname,'../dll'))
  files.forEach(file => {
    if(/.*\.dll\.js/.test(file)) {
      plugins.push(
        new AddAssetHtmlWebpackPlugin({
          filepath: path.resolve(__dirname, '../dll',file)
        })
      )
    }
    if(/.*\.manifest\.json/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll',file)
        })
      )
    }
  })
  return plugins
}

const configs = {
  entry: {
    index: './src/index.js',
    list: './src/list.js'
  },
  // 路径是默认从webpack-demo开始的，所以上面路径不能写成'../src/index.js'
  output: {
    path: path.resolve(__dirname, '../dist') // output的path属性必须为绝对路径，这句话不写也会有默认的：path: path.resolve(__dirname, '/dist')。
  },
  resolve: {
    extensions: ['.js','.jsx'],
    mainFiles: ['index','child'],
    alias: {
      child: path.resolve(__dirname,'../src/child/a')
    }
  },
  // plugins: [
  //     new HtmlWebpackPlugin({
  //       template: 'src/index.html'
  //     }),
  //     // CleanWebpackPlugin默认会认为build文件夹就是根目录，不允许删除根目录以外的目录，所以不可以直接写../dist。所以需要配置根路径让插件知道上一级目录才是根路径。
  //     new CleanWebpackPlugin('./dist', {
  //       root: path.resolve(__dirname, '../')
  //     }),
  //     // new BundleAnalyzerPlugin(),
  //     new webpack.ProvidePlugin({
  //       $: 'jquery'
  //     }),
  //     new AddAssetHtmlWebpackPlugin({
  //       filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
  //     }),
  //     new webpack.DllReferencePlugin({
  //       manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
  //     })
  //   ],
  optimization: {
    runtimeChunk: {
			name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: { // 如果是node_modules里面的文件就打包到vendors.js里面去，如果不是就走default（打包到codespliting.js里面去）。
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

configs.plugins = makePlugins(configs)

module.exports = configs