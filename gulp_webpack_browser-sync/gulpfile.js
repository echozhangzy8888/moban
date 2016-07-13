/*
* @Author: ZhangZheyi
* @Date:   2016-07-13 09:34:26
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-07-13 16:34:24
*/

'use strict';
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.dev.config.js");
var browser = require("browser-sync");

var browserSync =browser.create();
var PORT = 4000;
var loadMap =[
    'modules/*.*',
    'src/**/*.*',
    'js/*.*',
    './*.html',
    './web/*.html'
];

gulp.task("webpack", function(callback) {
     var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack({
        // configuration
        myConfig
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('server',[],function () {
    // content...
        browserSync.init({
            server:'./',
            port:PORT
        });
        gulp.watch(loadMap,['webpack'],function (file) {
            console.log(file.path)
            browserSync.reload();
        });
});


// web 目录放置*.html页面
// style 目录放置*.css文件，另外在此目录中放置了less源文件
// src 目录放置了我们的所有*.js文件
// mock 内置的模拟数据，放置在此
// img 图片放置目录
// link npm下载不了的第三方库放置在此
// YYT_PC_Modules 内部编写的模块，放置在此
// YYT_PC_Component 内部编写的组件，放置在此