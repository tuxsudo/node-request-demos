// Using the request module https://www.npmjs.com/package/request
// with streams
var request = require('request'),
	fs = require('fs');

request.get('http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/95355.json')
	.pipe( fs.createWriteStream('./responses/1.3.json') );
