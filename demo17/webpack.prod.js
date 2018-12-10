const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //生产模式使用分离代码插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //生产模式使用压缩代码插件

module.exports = merge(common, {
    mode: "production", //生产模式
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, //生产模式使用分离代码插件
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //生产模式使用分离代码插件
            filename: 'css/[name].css'
        }),
        new OptimizeCssAssetsPlugin({ //生产模式使用压缩代码插件
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                //生产打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        }
    }
});