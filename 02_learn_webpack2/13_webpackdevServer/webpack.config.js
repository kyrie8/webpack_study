const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: '/abcd' // 配置打包后的资源路径,一般要和devServer的publicPath一样
  },
  // 专门为webpack-dev-server
  devServer: {
    hot: true, //启动热更新
    contentBase: path.resolve(__dirname, '/abc'), //若要引用其他文件夹的资源，可设置资源的服务路径为/abc，
    watchContentBase: true, // 监测contentBase文件更新
    publicPath: '/abcd', // 配置本地服务的地址 默认值为/ 127.0.0.1:8080
    port: 777, //端口号
    open: true, // 自动打开浏览器
    compress: true, //打开gzip压缩
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader"
      },
      {
        test: /\.vue$/i,
        use: "vue-loader"
      },
      {
        test: /\.css/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}