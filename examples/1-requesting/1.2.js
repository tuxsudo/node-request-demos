/*

Simplest Request

Make remote request; pipe response to file...


Only core modules, no dependencies other than node.

*/

var http = require('http'),
	fs = require('fs');

http.request(
	{
		hostname: 'api.wunderground.com',
		port: 80,
		path: '/api/fbd0230b3e8fd897/geolookup/q/85226.json',
		method: 'GET',
		headers: {
    		'User-Agent': 'The Nodez'
    	}
  	},

  	function(res) {
  		res.pipe(fs.createWriteStream('./responses/1.2.json'));
  	}

).end();
