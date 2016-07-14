/*
* @Author: ZhangZheyi
* @Date:   2016-07-13 09:34:26
* @Last Modified by:   ZhangZheyi
* @Last Modified time: 2016-07-14 15:57:05
*/

'use strict';
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.dev.config.js");
var browser = require("browser-sync");
var clean = require('gulp-clean');

var browserSync =browser.create();
var PORT = 4000;
var loadMap =[
    'src/**/*.*',
    './web/*.html'
];

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

//打包
gulp.task("webpack",['clean'], function(callback) {
     var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(
        // configuration
        myConfig
    , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('server',['webpack'],function () {
    // content...
        browserSync.init({
            server:'./',
            port:PORT
        });

        browserSync.watch(loadMap, function (event, file) {
            if (event === "change") {
                gulp.run('webpack',function(){
                    console.log(55555555);
                    browserSync.reload()
                })
                
            }
        });

});

gulp.task('default',['server', 'webpack']);

// web 目录放置*.html页面
// style 目录放置*.css文件，另外在此目录中放置了less源文件
// src 目录放置了我们的所有*.js文件
// mock 内置的模拟数据，放置在此
// img 图片放置目录
// link npm下载不了的第三方库放置在此
// YYT_PC_Modules 内部编写的模块，放置在此
// YYT_PC_Component 内部编写的组件，放置在此