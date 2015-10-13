/*

HTTP request with options

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


/* Questions:


What's the difference between this example and the last (1.1.js)?

What problems or difficulties might you have if you only used the core `http` module?



*/
