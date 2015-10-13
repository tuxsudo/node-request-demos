/* Transforms:

{
	"response": {
		"version": "0.1",
		"termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
		"features": {
			"geolookup": 1
		}
	},

	"location": {
		"type": "CITY",
		"country": "US",
		"country_iso3166": "US",
		"country_name": "USA",
		"state": "CA",
		"city": "Beverly Hills",
		"tz_short": "PDT",
		"tz_long": "America/Los_Angeles",
		"lat": "34.09663010",
		"lon": "-118.41242981",
		"zip": "90210",
		"magic": "1",
		"wmo": "99999",
		"l": "/q/zmw:90210.1.99999",
		"requesturl": "US/CA/Beverly_Hills.html",
		"wuiurl": "http://www.wunderground.com/US/CA/Beverly_Hills.html",
		"nearby_weather_stations": {
			"airport": {
				"station": [
					{
					"city": "Santa Monica",
					"state": "CA",
					"country": "US",
					"icao": "KSMO",
					"lat": "34.02099991",
					"lon": "-118.44708252"
					}...
				]
			}
		}
	}
}

INTO:

{
	zip: 90210,
	city: "Beverly Hills",
	state: "CA",
	"lat": "34.09663010",
	"lon": "-118.41242981",
}
*/

module.exports = function(data) {

	return {
		zip: data.location.zip,
		city: data.location.city,
		state: data.location.state,
		lat: data.location.lat,
		lon: data.location.lon
	};

};
