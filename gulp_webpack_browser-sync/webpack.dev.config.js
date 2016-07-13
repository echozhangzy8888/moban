/*
* @Author: ZhangZheyi
* @Date:   2016-07-13 09:58:35
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-07-13 11:10:48
*/

'use strict';

var webpack =require("webpack");
var path = require("path");
var fs = require("fs");
var plugins = [];
var ExtractTextPlugin =  require('extract-text-webpack-plugin');
var optimize = webpack.optimize;
var extractCSS = new ExtractTextPlugin("../style/css/[name].css") ;
plugins.push(extractCSS);
plugins.push(new optimize.CommonsChunkPlugin('bundle.js'));
var sourceMap = require("./map.json").source;
var YYT_PC_Modules = 'link/YYT_PC_Modules/';
var YYT_PC_Component = 'link/YYT_PC_Component/';

var config ={
    entry: sourceMap,
    output: {
        path: path.resolve(__dirname + '/js'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'raw',
                exclude:/(node_modules)/
            },
            {
                test:/\.js$/,
                loader:'eslint-loader',
                exclude:/(node_modules)/
            },
            {
                test:/\.less$/i,
                loader:extractCSS.extract(['css','less'])
            },
            {   test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }

        ]
    },
    plugins: plugins,
    resolve: {
        alias: {
            "tplEng": path.resolve(__dirname, 'link/template'),  //模板引擎
            "BaseModel": path.resolve(__dirname, YYT_PC_Modules + 'baseModel'),
            "BaseView": path.resolve(__dirname, YYT_PC_Modules + 'baseView'),
            "store": path.resolve(__dirname, YYT_PC_Modules + 'store/locationStore'),
            "cookie": path.resolve(__dirname, YYT_PC_Modules + 'store/cookie'),
            "url": path.resolve(__dirname, YYT_PC_Modules + 'util/url'),
            "tools": path.resolve(__dirname, YYT_PC_Modules + 'util/tools'),
            "FlashAPI": path.resolve(__dirname,YYT_PC_Modules + 'util/FlashAPI'),
            "DateTime": path.resolve(__dirname, YYT_PC_Modules + 'util/DateTime'),
            "pwdencrypt": path.resolve(__dirname, YYT_PC_Modules + 'crypto/pwdencrypt'),
            "secret": path.resolve(__dirname, YYT_PC_Modules + 'crypto/secret'),
            "UploadFile": path.resolve(__dirname, YYT_PC_Component + 'feature/UploadFile'),
            "AjaxForm": path.resolve(__dirname, YYT_PC_Component + 'feature/AjaxForm'),
            "Scrollbar": path.resolve(__dirname, YYT_PC_Component + 'feature/Scrollbar'),
            "LoginBox": path.resolve(__dirname, YYT_PC_Component + 'business/LoginBox/'),
            "UserModel": path.resolve(__dirname, YYT_PC_Component + 'business/UserModel/'),
            "UploadFileDialog": path.resolve(__dirname, YYT_PC_Component + 'business/UploadFileDialog/'),
            "ui.Dialog": path.resolve(__dirname, YYT_PC_Component + 'ui/dialog/'),
            "ui.Confirm": path.resolve(__dirname, YYT_PC_Component + 'ui/confirm/'),
            "ui.MsgBox": path.resolve(__dirname, YYT_PC_Component + 'ui/msgBox/'),
            "config": path.resolve(__dirname, 'src/lib/config')
        }
    },
    externals: {  //externals 声明一个外部依赖  使用CDN/远程文件
        jquery: 'window.jQuery',
        backbone: 'window.Backbone',
        underscore: 'window._'
    }
};
 console.log(path.resolve(__dirname,'node_modules/jquery/dist/jquery.js'))

 module.exports = config;
