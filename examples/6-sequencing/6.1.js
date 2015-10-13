// Proxying with Express.js
var	express = require('express'),
	twitter = require('../../modules/twitter-helpers').init(process.env.KEY, process.env.SECRET),
	app = express();


// cached, optimized response
app.get('/api/v1/tweets', function (req, res ) {

	twitter.listTweets('tuxsudo', 'lds')

		.then( function(data) {
			res.send(data);
		})

		.catch( function(err) {
			console.error(err);
			res.status(500).end();
		});

});



var server = app.listen(3000, function () {

	console.log('Listening: http://localhost:%s/api/v1/tweets', server.address().port);

});
