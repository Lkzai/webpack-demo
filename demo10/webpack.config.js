const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //引入 webpack


module.exports = {
    entry: {
        app: './src/index.js'
        // print: './src/print.js'
    },
    devtool: 'inline-source-map', // 不同选项适用于不同环境
    devServer: {
        contentBase: './dist', //将dist目录下的文件(index.html)作为可访问文件, 如果不写这个参数则默认与webpack.cofig.js的同级目录
        port: 8080, //端口号设为8080, 默认也是8080,
        hot: true
    },
    module: {
        rules: [ //配置加载器, 用来处理源文件, 可以把es6, jsx等转换成js, sass, less等转换成css
            {
                test: /\.css$/, //配置要处理的文件格式，一般使用正则表达式匹配
                use: ['style-loader', 'css-loader'] //使用的加载器名称
            }
        ]
    },
    plugins: [ //webpack 通过 plugins 实现各种功能, 比如 html-webpack-plugin 使用模版生成 html 文件
        new CleanWebpackPlugin(['dist']), //设置清除的目录
        new HtmlWebpackPlugin({
            filename: 'index.html', //设置生成的HTML文件的名称, 支持指定子目录，如：assets/admin.html
        }),
        new webpack.HotModuleReplacementPlugin() //启用 webpack 内置的 HMR插件
    ],
    output: {
        filename: '[name].bundle.js', //根据入口文件输出不同出口文件
        path: path.resolve(__dirname, 'dist')
    }
};