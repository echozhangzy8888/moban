
var sourceFile = '../data/data.json';
$(function() {
    $.ajax({
        url: sourceFile,
        dataType: "json",
        success: function(datas) {
             var categories = datas.categories
             console.log(categories);

             
        }
    });

});
