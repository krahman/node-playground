var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<html><head><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person', function(req, res) {
	res.json({firstName: 'John', lastName: 'Doe'});
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head><title>Hello World</title></head><body><h1>Person : ' + req.params.id + '</h1></body></html>');
});

app.listen(3000);