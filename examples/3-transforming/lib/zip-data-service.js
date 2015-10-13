// Proxying with Express.js
var	request = require('request-promise');



module.exports = function(zipcode) {

	return request.get({
		uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/' + zipcode + '.json',
		json: true
	});

}








