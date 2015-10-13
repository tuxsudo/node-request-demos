// Using the request module https://www.npmjs.com/package/request
// (with callbacks)
var request = require('request');

request.get('http://www.lds.org/path/not/found.json', function (error, response, body) {

	// error with a truthy value indicates a technical error
	// response is an object. Mostly you need it for `response.statusCode`
	// body is a string respresentation of the response's body.

	if (!error && response.statusCode === 200) {
		var json = JSON.parse( body );
		console.log( Object.keys(json) );
  	} else if(!error) {
  		console.error(response.statusCode);
  	}

});



/* Questions:


What do callbacks allow that streams may not?




*/
