// Proxying with Express.js
var	request = require('request-promise'),
	Promise = global.Promise || require('es6-promise');


function geo(zipcode) {
	return request.get({
		uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/' + zipcode + '.json',
		json: true
	});
}

function astronomy(zipcode) {
	return request.get({
		uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/astronomy/q/' + zipcode + '.json',
		json: true
	});
}

function webcam(zipcode) {
	return request.get({
		uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/webcams/q/' + zipcode + '.json',
		json: true
	});
}


module.exports = function(zipcode) {
	return Promise.all( [ geo(zipcode), astronomy(zipcode), webcam(zipcode) ]);
};







