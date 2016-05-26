var axios = require('axios');
//643f29f9c1cd09638088516d79ecc152
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=643f29f9c1cd09638088516d79ecc152&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		},function(res){
			throw new Error(res.data.message);
		});
	}
}