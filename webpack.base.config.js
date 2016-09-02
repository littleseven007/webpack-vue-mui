/**
 * Created by aresn on 16/7/5.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        main: './src/entry/main',
        vendors: ['vue', 'vue-router','vue-resource'],
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        publicPath:'./dist',
    },
    // 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {compact: false} },
            { test: /\.css$/, loader: 'style!css!autoprefixer'}, // 自动加css3前缀
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'}, // 低于8K的压缩成base64编码
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: [

    ]
};