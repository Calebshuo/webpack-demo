const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
       {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader'
            ]
       }
  ]},
  plugins: [
    new MiniCssExtractPlugin({})
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
}

module.exports = merge(commonConfig, prodConfig)