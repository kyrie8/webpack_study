const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = true;

module.exports = {
  mode: "production",
  externals: { // cnd引进
    // window._
    lodash: "_",
    // window.dayjs
    dayjs: "dayjs"
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({ // css文件抽取
      filename: "css/[name].[hash:8].css"
    })
  ]
}