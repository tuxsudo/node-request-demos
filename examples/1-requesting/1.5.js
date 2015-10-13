// Using the request-promise module https://www.npmjs.com/package/request-promise
// With a "Promisifying" Module

// By default, http response codes other than 2xx will cause the promise to be rejected */
// json: true // Automatically parses the JSON string in the response
var request = require('request-promise');

request({ uri: 'http://api.wunderground.com/api/fbd0230b3e8fd897/geolookup/q/84095.json', json: true })

	.then( console.log )

	.catch( console.error );



