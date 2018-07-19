const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 设置 sourcemaps 为 eval 模式，将模块封装到 eval 包裹起来
  // devtool: ,
  // 我们应用的入口, 在 `src` 目录 (我们添加到下面的 resolve.modules):
  entry: ['./index.tsx'],
  // 配置 devServer 的输出目录和 publicPath
  output: {
    filename: 'app.js',
    publicPath: '',
    path: path.resolve('dist')
  },
  // 配置 devServer
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    inline: true
  },
  // 告诉 Webpack 加载 TypeScript 文件
  resolve: {
    // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
    extensions: ['.ts', '.tsx', '.js'],
    // 在模块中添加 src, 当你导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      // .ts(x) 文件应该首先经过 Typescript loader 的处理, 然后是 babel 的处理
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist/*']
    ),
    new HtmlWebpackPlugin({
      title: 'ts',
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: 'views/index.html', //html模板路径
      inject: 'body'
    })
  ]
}
