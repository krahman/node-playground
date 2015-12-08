
module.exports = function(mongoose) {
	var userSchema = mongoose.Schema({
		local: {
			username: String,
			password: String
		}
	});

	return mongoose.model('User', userSchema);
};