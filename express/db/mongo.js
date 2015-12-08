var mongoose = require('mongoose');

module.exports = function(config) {
	var mongoConfig = config.get('Nodehack.mongoConfig');
	mongoose.connect(mongoConfig.url);
	return mongoose;
};