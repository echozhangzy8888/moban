var ejs = require('ejs'),

    read = require('fs').readFileSync,
    join = require('path').join,
    str = read(join('./view','index.html'), 'utf8');

var datas = JSON.parse(read('data.json','utf-8')),
    categories = datas.categories

var ret = ejs.compile(str)({
  categories:categories,
  title: 'EJS index',
  names: ['foo2', 'bar', 'baz']
});

console.log("npn run index ok!")

module.exports=ret;


