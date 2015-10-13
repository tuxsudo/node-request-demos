module.exports = function( data ) {

	var geo = data[0].location,
		daylight = data[1].sun_phase,
		webcams = data[2].webcams;

	return {
		zip: geo.zip,
		city: geo.city,
		state: geo.state,
		lat: geo.lat,
		lon: geo.lon,
		images: webcams
			.filter(function(data) { return data.zip===geo.zip; })
			.map(function(data){ return data.CURRENTIMAGEURL; })
			.slice(0,2),
		sunrise: daylight.sunrise.hour + ':' + daylight.sunrise.minute,
		sunset: daylight.sunset.hour + ':' + daylight.sunset.minute
	};

};
