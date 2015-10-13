// Proxying with Express.js
var	request = require('request-promise'),
	counter = 0;



module.exports = function(zipcode) {


	console.log('%s (%s)', ++counter, zipcode);

	return request.get({
		uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/' + zipcode + '.json',
		json: true
	});

}








