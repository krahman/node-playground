var bodyParser = require('body-parser');

module.exports = function(app) {

	var urlencodedParser = bodyParser.urlencoded({extended: false});

	app.get('/person', function(req, res) {
		// get person list
		res.json({firstName: 'John', lastName: 'Doe'});
	});

	app.post('/person', urlencodedParser, function(req, res) {
		// save person to db
		console.log({firstName: req.body.firstName, lastName: req.body.lastName});
		res.send('Thank you : ' + req.body.firstName);
	});

	app.get('/person/:id', function(req, res) {
		// find person in db
		res.render('person', {id: req.params.id});
	});

	app.delete('/person/:id', function(req, res) {
		// delete person in db
	});
};