/*
 * @Author: ZhangZheyi
 * @Date:   2016-07-25 14:32:56
 * @Last Modified by:   ZhangZheyi
 * @Last Modified time: 2016-07-26 11:18:59
 */

'use strict';


var sourceFile = '../external_html/client_compilation.ejs';


$(function() {
    $.ajax({
        url: sourceFile ,
        // dataType: "template",
        success: function(str) {
            $("#demo").html(str);
        }
    });
});


