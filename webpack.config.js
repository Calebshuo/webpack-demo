const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
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
              'postcss-loader']
       }
    ]
  }
};