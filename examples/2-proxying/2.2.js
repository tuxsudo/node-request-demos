// Proxying with Express.js
var	request = require('request'),
	express = require('express'),
	app = express();


app.get('/api/v1/locations/:zipcode', function (req, res) {
	request.get('http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/' + req.params.zipcode + '.json').pipe( res );
});



var server = app.listen(3000, function () {

	console.log('Example app listening at http://localhost:%s/api/v1/locations/:zipcode', server.address().port);

});
