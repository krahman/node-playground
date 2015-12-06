var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonPrser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

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

app.post('/person', urlencodedParser, function(req, res) {
	console.log({firstName: req.body.firstName, lastName: req.body.lastName});

	res.send('Thank you : ' + req.body.firstName);
});

app.post('/personjson', jsonPrser, function(req, res) {
	console.log({firstName: req.body.firstName, lastName: req.body.lastName});
});

app.get('/person/:id', function(req, res) {
	res.render('person', {id: req.params.id});
});

app.listen(3000);