var promisify = require('promisify-node-callback'),
	getAccessToken = promisify( require('./lib/app-access-token') ),
	getListTweets = promisify( require('./lib/list-statuses.js') ),
	tokenPromise;




//	Cache the token getting
function cacheToken(consumer_key, consumer_secret) {

	// create a new Promise-wrapped token
	if( consumer_key && consumer_secret ) {
		tokenPromise = getAccessToken(consumer_key, consumer_secret);
	}

	// return Promise-wrapped token if exists, or a broken Promise
	return tokenPromise || Promise.reject('Not Twitter Authorized');

}



//	exposed module
var exp = module.exports = {

	init: function(key, secret) {
		cacheToken(key, secret);
		return exp;
	},

	listTweets: function(user, list) {
		return cacheToken()

			.then( function( token ) {
				return getListTweets(token, user, list);
			});

	}

};
