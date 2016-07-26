/*
 * @Author: ZhangZheyi
 * @Date:   2016-07-25 14:32:56
 * @Last Modified by:   ZhangZheyi
 * @Last Modified time: 2016-07-26 11:09:52
 */

'use strict';


var sourceFile = '../external_html/example_client.template',
    staticVersion = createVersion();

function createVersion() {
    var date = new Date();
    // console.log(date.getFullYear());
    // console.log((date.getMonth() > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)));
    // console.log(date.getDate());
    // console.log(date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours() + " 时");
    return '?v=' + date.getFullYear() + "" + (date.getMonth() > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + "" + (date.getDate()) + "" + (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + "" + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes());
}

//console.log(sourceFile+staticVersion);


$(function() {
    $.ajax({
        url: sourceFile +staticVersion,
        // dataType: "template",
        success: function(datas) {
            var html = datas;
            $("#template-inner").html(datas);
            // document.write("<script>alert(55555)</script>") 
        }
    });
});


