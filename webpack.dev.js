const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
        cwd: path.resolve(__dirname, './src/assets/imgs/icons'),
        glob: '*.png'
      },
      // 输出雪碧图文件及样式文件
      target: {
        image: path.resolve(__dirname, './dist/sprites/sprite.png'),
        css: path.resolve(__dirname, './dist/sprites/sprite.css')
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
        cssImageRef: '../sprites/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    }),
  ]
})