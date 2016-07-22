var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var read = require('fs').readFileSync;
var join = require('path').join;
var template = read(join(__dirname, '/template.html'), 'utf8');
var render =  ejs.compile(template);


var datas = JSON.parse(fs.readFileSync('data.json','utf-8')),
    categories = datas.categories

for(var cat in categories){
    var data = {
        filename: `${cat}.html`,
        activeCat: cat,
        categories: categories
    }
    renderFile(data)
}

renderFile({
    filename: `index.html`,
    activeCat: 'base',
    categories: categories
})

function renderFile(data){
    var ret = render(data)
    fs.writeFile('dist/' + data.filename, ret, 'utf-8', err => {
        if (err) throw err
        console.log(`${data.filename} generated.`)
    })
}
