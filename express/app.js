var express = require('express');
var app = express();

var config = require('config');
var dbConfig = config.get('Nodehack.dbConfig');
var appConfig = config.get('Nodehack.appConfig');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : dbConfig.host,
	user     : dbConfig.user,
	password : dbConfig.password,
	database : dbConfig.database
});

connection.connect(function(err) {
	if (err) {
		console.error('Error connecting : ' + err.stack);
		return;
	}

	console.log('Connected as id : ' + connection.threadId);
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res, next) {
	console.log('Opening : ' + req.url);
	next();
});

htmlController(app);
apiController(app);

app.listen(appConfig.port);