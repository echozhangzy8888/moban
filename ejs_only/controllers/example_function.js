var ejs = require('ejs'),

    read = require('fs').readFileSync,
    join = require('path').join,
   // str = read(join('./view', 'example_function.html'), 'utf8'),
    path = join('./view', 'example_function.html');


var datasJson = JSON.parse(read('data.json', 'utf-8')),
    categories = datasJson.categories,
    data = {
        title: 'EJS example_function',
        users: [
            { name: 'Tobi', age: 2, species: 'ferret' },
            { name: 'Loki', age: 2, species: 'ferret2' },
            { name: 'Jane', age: 6, species: 'ferret' }
        ],
        categories: categories
    }

//var ret = ejs.compile(str)(data);
var ret = ejs.compile(read(path, 'utf-8'), {filename: path})(data);

console.log("npn run example ok!")

module.exports = ret;


/* 相关选项：
cache
filename 缓存的键名称
scope    函数执行作用域
debug
...
*/
