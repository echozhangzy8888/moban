var ejs = require('ejs'),

    read = require('fs').readFileSync,
    join = require('path').join,
    str = read(join('./view', 'example_function.html'), 'utf8');


var datas = JSON.parse(read('data.json','utf-8')),
    categories = datas.categories

var ret = ejs.compile(str)({
  categories:categories,
  title: 'EJS example_function',
  names: ['foo2', 'bar', 'baz']
});

console.log("npn run example ok!")

module.exports=ret;


