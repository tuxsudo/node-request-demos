module.exports = function(data) {

	var l = data.location;

	return {
		zip: l.zip,
		city: l.city,
		state: l.state,
		lat: l.lat,
		lon: l.lon
	};

};
