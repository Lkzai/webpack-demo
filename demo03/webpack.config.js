const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ //配置加载器, 用来处理源文件, 可以把es6, jsx等转换成js, sass, less等转换成css
            {
                test: /\.css$/, //配置要处理的文件格式，一般使用正则表达式匹配
                use: ['style-loader', 'css-loader'] //使用的加载器名称
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
};