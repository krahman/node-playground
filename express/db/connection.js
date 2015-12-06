var mysql = require('mysql');

module.exports = function(config) {

	var dbConfig = config.get('Nodehack.dbConfig');

	var connection = mysql.createConnection({
		host     : dbConfig.host,
		user     : dbConfig.user,
		password : dbConfig.password,
		database : dbConfig.database
	});

	return connection;
};
