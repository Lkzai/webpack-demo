const path = require('path'); //公共模块
const CleanWebpackPlugin = require('clean-webpack-plugin'); //公共插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //公共插件


module.exports = {
    entry: { //公共entry
        index: "./src/components/index/index.js",
        otherA: "./src/components/otherA/otherA.js",
        otherB: "./src/components/otherB/otherB.js",
    },
    output: { //公共output
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js', //根据入口文件分为不同出口文件
    },
    module: {
        rules: [ //公共配置加载器
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/components/index/index.html",
            chunks: ['index', 'commons'],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/components/otherA/otherA.html",
            chunks: ['otherA', 'commons'],
            filename: "otherA.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/components/otherB/otherB.html",
            chunks: ['otherB', 'commons'],
            filename: "otherB.html"
        })
    ]

};