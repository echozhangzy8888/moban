
'use strict';

import "sass/style.scss";

require('imports?show=./a.js&config=>{name:"zzy"}!./test.js')

document.addEventListener('DOMContentLoaded', () => {
    $('body').css('background','cyan')
}, false);




