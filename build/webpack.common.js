const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  // 路径是默认从webpack-demo开始的，所以上面路径不能写成'../src/index.js'
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
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
       },
       { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
        // options: {
        //   presets: [['@babel/preset-env'],{
        //     useBuiltIns: 'usage'
        //   }]
        // }
       }
    ]},
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      // CleanWebpackPlugin默认会认为build文件夹就是根目录，不允许删除根目录以外的目录，所以不可以直接写../dist。所以需要配置根路径让插件知道上一级目录才是根路径。
      new CleanWebpackPlugin('./dist', {
        root: path.resolve(__dirname, '../')
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0, // 大于这个数值的其他引入文件会被进行代码分隔
        maxSize: 0, // 用得不多。比如一个模块20mb然后会按照这个数值再次进行拆分（如果可以拆的话。）
        minChunks: 1,// 被用了至少多少次后才会进行代码分隔。
        maxAsyncRequests: 5, // 最多只进行5次代码分隔，超过了就不做了（防止客户端进行过多的http请求）。这个配置用默认的就可以了。
        maxInitialRequests: 3, // 入口文件引入的库最多可以分隔出三个文件。这个配置用默认的就可以了。
        automaticNameDelimiter: '~',// 文件连接符
        name: true, // cachegroups里面的filename有效。（一般不会改）
        cacheGroups: { // 如果是node_modules里面的文件就打包到code.js里面去，如果不是就走default（打包到codespliting.js里面去）。
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10, // 判断优先级。数值越大优先级越高。
            filename: 'lodash.js'
          },
          default: {
            filename:'codespliting.js',
            priority: -20,
            reuseExistingChunk: true // 如果一个模块被打包过了，那么我就忽略这个模块直接去使用之前已经打包过的代码。
          }
        }
      }
    }
}