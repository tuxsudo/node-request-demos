/*


This module is simply an opinionated instantiation of the `oath` module:


https://www.npmjs.com/package/oauth


*/


var OAuth2 = require('oauth').OAuth2;



module.exports = function getToken(key, secret, cb) {

	var oauth2 = new OAuth2(key, secret, 'https://api.twitter.com/', null, 'oauth2/token', null);

	oauth2.getOAuthAccessToken('', {'grant_type':'client_credentials'}, function (err, access_token, refresh_token, results) {

		if(err) { return cb(err); }

		cb(null, access_token);

	});

};
