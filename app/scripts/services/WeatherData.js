'use strict';
angular.module('badeseenApp').factory('WeatherData',['$q', 'ENV', '$http',
	function ($q,ENV, $http) {
		var allWeatherKey = 'weatherCache.allweatherdata';
		var allWeatherMemorycache;

		//1 hour
		var maxAge = 3600000;
		//1 week
		// var maxAge = 604800000;
		
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		
		var _isUptoDate = function(){
			//load data
			_get();
			if(allWeatherMemorycache){
				var lastmodified = allWeatherMemorycache.lastmodified;
				var current = new Date();
				return (current.getTime() <= lastmodified + maxAge );
			}
			return false;
		};

		var _get = function(){
			var deferred = $q.defer();
			if(!allWeatherMemorycache){
				allWeatherMemorycache = localStorage.getItem(allWeatherKey);
				if(allWeatherMemorycache){
					allWeatherMemorycache = JSON.parse(allWeatherMemorycache);
					deferred.resolve(allWeatherMemorycache.data);
				}else{
					var cacheRebuildPromise = _rebuildCache();
					cacheRebuildPromise
					.then(function(){
							return allWeatherMemorycache.data;
					});
					deferred.resolve(cacheRebuildPromise);
				}
			}
			return deferred.promise;
		};

		var _put = function(value){
			var storage = {};
			storage.data = value;
			storage.lastmodified = new Date().getTime();			
			localStorage.setItem(allWeatherKey,JSON.stringify(storage));
			allWeatherMemorycache = storage;
		};

		

		var _rebuildCache = function(){
			var deferred = $q.defer();
			$http.get(lakesUrl + '/allweather')
			.then(function(response){
				var weatherdatas = response.data.weatherdatas;
				_put(weatherdatas);
				deferred.resolve();
			})
			.catch(function(response){
				deferred.reject(response);
			});

			return deferred.promise;
		};

		var getAll = function () {
			return _get();
		};

		var getById = function (id) {
		 	return _get()
			.then(function(idToWeatherMap){
				return idToWeatherMap[id];
			});
		};

		var service = {
			/**
			 * [prepareCache This method fills / updates the cache if elements are outdated. This method should be execute once at start of the app.]
			 * @return {[QPromise]} [QPromise. Gets resolved if cache is ready or rejected if an error occurred e.g. networkconnection does not exist.]
			 */
			 prepareCache: function(){
			 	var deferred = $q.defer();
			 	if(!_isUptoDate()){
			 		deferred.resolve(_rebuildCache());
			 	}else{
			 		deferred.resolve();
			 	}
			 	return deferred.promise;
			 },
			
			/**
			 * [getAll Returns all lakes]
			 * @return {[QPromise]} [QPromise. Gets resolved with the lakes. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getAll: getAll,
			/**
			 * [getById Returns a lake by id]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with the lake or undefined if no lake with this id exists. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getById: getById

		};


		return service;
	}]);