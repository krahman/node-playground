var mysql = require('mysql');

module.exports = function(config) {

	var dbConfig = config.get('Nodehack.dbConfig');

	var connection = mysql.createConnection({
		host     : dbConfig.host,
		user     : dbConfig.user,
		password : dbConfig.password,
		database : dbConfig.database
	});

	connection.connect(function(err) {
		if (err) {
			console.error('Error connecting : ' + err.stack);
			connection.end();
			return;
		}

		console.log('Connected as id : ' + connection.threadId);
	});
	
	return connection;
};
