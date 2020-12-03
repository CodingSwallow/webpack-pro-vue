const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = merge(common, {
  devtool: 'hidden-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'test')
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        cwd: path.resolve(__dirname, './src/assets/imgs/icons'),
        glob: '*.png'
      },
      // 输出雪碧图文件及样式文件
      target: {
        image: path.resolve(__dirname, './test/sprites/sprite.png'),
        css: path.resolve(__dirname, './test/sprites/sprite.css')
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        cssImageRef: '../sprites/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    }),
  ],
  optimization: {
    minimizer: [
      new MiniCssExtractPlugin()
    ]
  }
})