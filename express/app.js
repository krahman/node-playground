'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var config = require('config');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var connection = require('./db/connection')(config);

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res, next) {
	console.log('Opening : ' + req.url);
	next();
});

htmlController(app);
apiController(app);

app.listen(port);