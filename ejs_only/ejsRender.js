var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),

    read = require('fs').readFileSync,
    join = require('path').join,
    str = read(join(__dirname, '/index.html'), 'utf8');


var datas = JSON.parse(fs.readFileSync('data.json','utf-8')),
    categories = datas.categories

var ret = ejs.compile(str)({
  categories:categories,
  header: 'Hello EJS',
  names: ['foo2', 'bar', 'baz']
});

console.log("npn run ejsRender ok!")

module.exports=ret;


