"use strict";
import path from 'path';
import webpack from 'webpack';
import colors from 'colors';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TransferWebpackPlugin from 'transfer-webpack-plugin';
import Clean from 'clean-webpack-plugin';

let config = {
    resolve: {
        alias: {
             zepto:'vendor/zepto/zepto.min.js',
             swiper:'vendor/swiper/js/swiper.min.js'
        },
        root: path.join(__dirname, 'source'),
        extensions: ['', '.js'], //自动扩展文件后缀名
    },

    entry: {
        vendor: ['zepto','swiper'], 
        main: './source/main.js',
    },

    output: {
        path: './dist',
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: function(path) {
                    if (/node_modules/.test(path)) {
                        return true
                    }
                    return false;
                },
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                },
            },
            {   test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {   test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loaders: [
                    // url-loader更好用，小于10KB的图片会自动转成dataUrl，
                    // 否则则调用file-loader，参数直接传入
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[hash:8].[name].[ext]&limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[hash:8].[name].[ext]&limit=10000&mimetype=application/font-woff2" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[hash:8].[name].[ext]&limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[hash:8].[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[hash:8].[name].[ext]&limit=10000&mimetype=image/svg+xml" },
           // { test: require.resolve('zepto'), loader: 'expose?$' },
            { test: /\.ejs$/, loader: 'ejs-compiled' }

        ]
    },

    plugins: [
        new Clean(['dist']),

        //使其变成全局变量，不用在自己文件require('zepto')了
        new webpack.ProvidePlugin({
            $: 'zepto'
        }),
        new ExtractTextPlugin('css/[name].bundle.css'),

        //commonsPlugin 第三方库打包生成的文件
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),

     
    ],
    devtool: '#source-map'
}

module.exports = config;
