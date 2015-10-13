// Proxying with Express.js
var	express = require('express'),
	zipService = require('./lib/zip-data-service'),
	zipTransform = require('./lib/zip-transform.js'),
	app = express();



// bloated response
app.get('/api/v1/locations/bloat/:zipcode', function (req, res ) {

	zipService(req.params.zipcode)

		.then(function(data){
			res.send(data);
		})

		.catch(function(err) {
			console.error(err);
			res.status(404).end();
		});

});


// optimized response
app.get('/api/v1/locations/:zipcode', function (req, res ) {

	zipService(req.params.zipcode)

		.then(zipTransform)

		.then(function(data){
			res.send(data);
		})

		.catch(function(err) {
			console.error(err);
			res.status(500).end();
		});

});




var server = app.listen(3000, function () {

	console.log('Example app listening at http://localhost:%s/api/v1/locations/90210', server.address().port);

});
