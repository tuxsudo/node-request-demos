var memoize = require('memoizee'),
	merge = require('object-assign');


module.exports = function(obj) {

	// loop over object keys
	return Object.keys( obj )

		// map keys to array of single-key objects with value being memoized function
		.map(function(k) {
			var o = {};
			o[ k ] = memoize( obj[ k ].bind(obj), { maxAge: 1000*20 } );
			return o;
		})

		// reduce array of single-key objects to one object
		.reduce( function(l, c) {
			return merge(l, c);
		}, {} );

}
