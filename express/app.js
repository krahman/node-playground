var express = require('express');
var app = express();

var config = require('config');
var appConfig = config.get('Nodehack.appConfig');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var connection = require('./db/connection')(config);
connection.connect(function(err) {
	if (err) {
		console.error('Error connecting : ' + err.stack);
		connection.end();
		return;
	}

	console.log('Connected as id : ' + connection.threadId);
});

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res, next) {
	console.log('Opening : ' + req.url);
	next();
});

htmlController(app);
apiController(app);

app.listen(appConfig.port || 3000);