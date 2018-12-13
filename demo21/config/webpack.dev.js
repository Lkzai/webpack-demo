const path = require('path'); //公共模块
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map', //开发模式启用代码跟踪
    devServer: { //开发模式启用服务器
        contentBase: '../dist',
        port: 8080,
        compress: true
    }
});