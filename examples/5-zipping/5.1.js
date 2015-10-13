// Proxying with Express.js
var	express = require('express'),
	memoize = require('memoizee'),
	zipService = require('./lib/zip-data-service'),
	zipCache = memoize(zipService, { maxAge: 1000*20 }), // 20 second caching
	purify = require('./lib/purify'),
	zipTransform = require('./lib/zip-transform'),
	app = express();





// cached, optimized response
app.get('/api/v1/:zipcode', function (req, res ) {

	zipCache( req.params.zipcode ) // <-- seed / retrieve from cache

		.then( purify ) // <-- immutable

		.then( zipTransform ) // <-- payload reduction

		.then( function(data) {
			res.send(data);
		})

		.catch( function(err) {
			console.error(err);
			res.status(500).end();
		});

});


// non-cached, non-optimized
app.get('/api/v1/:zipcode/fresh', function (req, res ) {

	zipService( req.params.zipcode )

		.then(function(data){
			res.send(data);
		})

		.catch(function(err) {
			console.error(err);
			res.status(500).end();
		});

});






var server = app.listen(3000, function () {

	console.log('Example app listening at http://localhost:%s/api/v1/90210', server.address().port);

});
