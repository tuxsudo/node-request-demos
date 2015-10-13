var	request = require('request');

module.exports = function( token, screen_name, list_slug, cb ) {


	request.get(

		{
			url: 'https://api.twitter.com/1.1/lists/statuses.json',

			headers: {
				Authorization: 'Bearer ' + token,
			},

			qs: {
				slug: list_slug,
				owner_screen_name: screen_name,
				count: 100
			}

		},

		function(err, response, body) {

			if(err || response.statusCode > 399) {
				return cb( err || "Invalid API Response: " + response.statusCode );
			}


			cb( null, JSON.parse(body) );

		}
	);


}
