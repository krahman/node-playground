var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
	console.log('Opening : ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person', function(req, res) {
	res.json({firstName: 'John', lastName: 'Doe'});
});

app.get('/person/:id', function(req, res) {
	res.render('person', {id: req.params.id});
});

app.listen(3000);