var ejs = require('ejs'),

    read = require('fs').readFileSync,
    join = require('path').join,
   // str = read(join('./view', 'example_function.html'), 'utf8'),
    path = join('./view', 'example_client.html');


var datasJson = JSON.parse(read('data.json', 'utf-8')),
    categories = datasJson.categories,
    data = {
        title: 'EJS example_client',
        categories: categories
    }

//var ret = ejs.compile(str)(data);
var ret = ejs.compile(read(path, 'utf-8'), {filename: path})(data);

console.log("npn run example_client ok!")

module.exports = ret;



