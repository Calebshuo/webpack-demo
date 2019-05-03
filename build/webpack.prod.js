const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
       {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader,
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
        use: [ MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader'
            ]
       },
       { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: [
          'babel-loader'
        ]
       }
  ]},
  plugins: [
    new MiniCssExtractPlugin({}),
    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  }
}

module.exports = merge(commonConfig, prodConfig)