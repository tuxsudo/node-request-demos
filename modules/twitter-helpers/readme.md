# Consuming a Twitter List (Requires OAUTH2)


## OAUTH2

Parts of Twitter's web service require OAUTH2 so applications can authenticate without a _user_ context.


**Using OAUTH2**
*	register an app
*	record consumer_key and consumer_secret
*	use key & secret against auth-endpoint to get an access_token needed on subsequent requests
*	Requests for access_token is rate-limited, so cache results...


Take a look at [lib/app-access-token.js](lib/app-access-token.js)


**More About App-Only Authentication**
[App-only Authentication](https://dev.twitter.com/oauth/application-only)
[About the Token](https://dev.twitter.com/oauth/reference/post/oauth2/token)




## Twitter API -- Getting the statuses of all users on a list

Tweet aggregation via twitter list.

We want to grab tweets from people on this list: https://twitter.com/tuxsudo/lists/lds


Take a look at [lib/list-statuses.js](lib/list-statuses.js)


**More Infos**
[Twitter List Endpoint](https://dev.twitter.com/rest/reference/get/lists/statuses)
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[Request Module](https://github.com/request/request)




## Putting it Together

We want to expose an easy consumer interface for developers who use this module.


	var twitter = require('../path/to/this/module');

	twitter.init('key', 'secret')
		.listTweets('username', 'listname')
		.then( doSomethingWithTweets )


Take a look at [index.js](./index.js)


**More Info**

[Promisify](https://www.npmjs.com/package/promisify-node-callback)

