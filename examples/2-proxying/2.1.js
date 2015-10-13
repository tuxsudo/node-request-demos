// Proxy some of the things things...
var http = require('http');


http.createServer( function(clientReq, myResponse) {

	if (clientReq.method === 'GET' && clientReq.url === '/zip') {

		http.request('http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/84095.json', function(remoteResponse) {
			remoteResponse.pipe( myResponse );
		}).end()

	}

	else {
		myResponse.writeHead(404);
		myResponse.end();
	}

}).listen(8089);


console.log('Try: http://localhost:8089/zip');




/* Questions:


How does this scale?


*/
