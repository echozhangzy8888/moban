
'use strict';
import "sass/style.scss";
import "vendor/swiper/css/swiper.min.css";



//require('imports?show=./a.js&config=>{name:"zzy"}!./test.js');// 非commonjs规范注入

require('imports?show=./mode/a.js!./test.js');

document.addEventListener('DOMContentLoaded', () => {
    $('body').css('background','cyan')
}, false);




