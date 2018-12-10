const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js', //多个入口文件
        print: './src/print.js'
    },
    plugins: [ //webpack 通过 plugins 实现各种功能, 比如 html-webpack-plugin 使用模版生成 html 文件
        new CleanWebpackPlugin(['dist']), //设置清除的目录
        new HtmlWebpackPlugin({
            filename: 'index.html', //设置生成的HTML文件的名称, 支持指定子目录，如：assets/admin.html
        })
    ],
    output: {
        filename: '[name].bundle.js', //根据入口文件输出不同出口文件
        path: path.resolve(__dirname, 'dist')
    }
};