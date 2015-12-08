'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var userController = require('./controllers/userController');

var config = require('config');
var mysqlConn = require('./db/mysql')(config);
var mongoose = require('./db/mongo')(config);

var User = require('./models/user')(mongoose);

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
	secret: '[SECRET_STRING]',
	saveUninitialized: true, 
	resave: true
}));

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res, next) {
	console.log('Opening : ' + req.url);
	console.log(req.cookies);
	console.log('*****************');
	console.log(req.session);
	next();
});

htmlController(app);
apiController(app);
userController(app, User);

app.listen(port);