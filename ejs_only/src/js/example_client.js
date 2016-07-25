/*
 * @Author: ZhangZheyi
 * @Date:   2016-07-25 14:32:56
 * @Last Modified by:   ZhangZheyi
 * @Last Modified time: 2016-07-25 18:24:17
 */

'use strict';


var sourceFile = '../external_html/example_client.template';
console.log(sourceFile)
$(function() {
    $.ajax({
        url: sourceFile,
        // dataType: "template",
        success: function(datas) {
            var html = datas;
            $("#aaa").html(datas);
            // document.write("<script>alert(55555)</script>") 
        }
    });

});
