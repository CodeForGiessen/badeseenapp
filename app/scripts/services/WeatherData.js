'use strict';
angular.module('badeseenApp').factory('WeatherData',['$q', 'ENV', '$http', 'KeyCache',
	function ($q,ENV, $http,KeyCache) {
		var allWeatherKey = 'weatherCache.allweatherdata';
		var maxAge = ENV.cachesMaxAge.weather;		
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		var timeout = ENV.requestTimeout;

		var rebuild = function(){
			return $http.get(lakesUrl + '/allweather',{
				timeout: timeout
			})
			.then(function(response){
				return response.data.weatherdatas;
			});
		};

		var option ={
			key: allWeatherKey,
			rebuild: rebuild,
			maxAge: maxAge
		};

		var getAll = function () {
			return KeyCache.get(option);
		};

		var getById = function (id) {
		 	return KeyCache.get(option)
			.then(function(idToWeatherMap){
				return idToWeatherMap[id];
			});
		};

		

		var service = {
			
			/**
			 * [getAll Returns all weatherdatas mapped by the lake id]
			 * @return {[QPromise]} [QPromise. Gets resolved with the all weatherdatas. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getAll: getAll,
			/**
			 * [getById Returns weatherdata object for an specific lake]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with the weatherdata or undefined if no lake with this id exists. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getById: getById,

			/**
			 * [getWeatherIconClassById Returns the css class of http://erikflowers.github.io/weather-icons/ by open weather map icon it]
			 * @param {[String]} iconId [description]
			 * @return {[String]} [Css class]
			 */
			getWeatherIconClassById: function(iconId){
				var mapping = {
					'01d': 'wi-day-sunny',
					'02d': 'wi-day-sunny-overcast',
					'03d': 'wi-day-cloudy',
					'04d': 'wi-cloudy',
					'09d': 'wi-showers',
					'10d': 'wi-rain',
					'11d': 'wi-thunderstorm',
					'13d': 'wi-snow',
					'50d': 'wi-fog',
					'01n': 'wi-night-clear',
					'02n': 'wi-night-cloudy',
					'03n': 'wi-night-cloudy',
					'04n': 'wi-cloudy',
					'09n': 'wi-showers',
					'10n': 'wi-rain',
					'11n': 'wi-thunderstorm',
					'13n': 'wi-snow',
					'50n': 'wi-fog'					
				};

				var easteregg = 'wi-tornado';

				var cssclass = mapping[iconId];
				if(cssclass){
					return cssclass;
				}else{
					return easteregg;
				}
			}
		};
		return service;
	}]);