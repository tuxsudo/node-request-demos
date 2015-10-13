/*

Simplest Request

Make remote request; pipe response to file...


Only core modules, no dependencies other than node.

*/

var http = require('http'),
	fs = require('fs');

http.request('http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/84095.json', function(res) {
	res.pipe( fs.createWriteStream('./responses/1.1.json'));
}).end();
