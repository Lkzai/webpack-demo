const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', //开发模式
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader', //开发模式不使用插件
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    devtool: 'inline-source-map', //开发模式启用代码跟踪
    devServer: { //开发模式启用服务器
        contentBase: './dist',
        port: 8080,
    }
});