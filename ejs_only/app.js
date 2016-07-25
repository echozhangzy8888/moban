var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));  

app.get('/', function(req, res) {
    res.send(require('./controllers/index.js'));
});

app.get('/example_function', function(req, res) {
    res.send(require('./controllers/example_function.js'));
});

var server = app.listen(3001, function () {
  console.log('Example app listening at http://localhost:3001');
});

