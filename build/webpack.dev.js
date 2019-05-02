const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: true,
    contentBase: './dist',
    open: true,
    // hot: true,
    // hotOnly: true
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: [
          'babel-loader',
          'eslint-loader'
        ]
        // loader: 'babel-loader'
        // options: {
        //   presets: [['@babel/preset-env'],{
        //     useBuiltIns: 'usage'
        //   }]
        // }
       }
  ]},
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  }
};

module.exports = merge(commonConfig, devConfig)