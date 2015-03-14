'use strict';
angular.module('badeseenApp').factory('KeyCache',['$q',
	function ($q) {
		var memoryCache = {};

		//array of promises which much resolved or rejected if the request fails
		var cacheRefreshRequestDeferres = {};



		var _isUptoDate = function(maxAge,cache){
			if(cache){
				var lastmodified = cache.lastmodified;
				var current = new Date();
				return (current.getTime() <= lastmodified + maxAge );
			}
			return false;
		};

		var _get = function(option){
			var keyString = option.key;
			var rebuild = option.rebuild;
			var maxAge = option.maxAge;
			var deferred = $q.defer();

			var cache = memoryCache[keyString];

			if(!cache){
				cache = localStorage.getItem(keyString);
				if(cache){
					cache = JSON.parse(cache);
					memoryCache[keyString] = cache;					
				}
			}
			if(_isUptoDate(maxAge,cache)){
				deferred.resolve(cache.data);
			}else{
				if(!cacheRefreshRequestDeferres[keyString]){
					cacheRefreshRequestDeferres[keyString] = [];
				}

				if(!cacheRefreshRequestDeferres[keyString].length){
					rebuild()
					.then(function(newValue){
						memoryCache[keyString] = newValue;
						_put(option,newValue);
						var dds = cacheRefreshRequestDeferres[keyString];
						cacheRefreshRequestDeferres[keyString] = [];						
						dds.forEach(function(def){
							def.resolve(newValue);
						});
					})
					.catch(function(err){
						var dds = cacheRefreshRequestDeferres[keyString];
						cacheRefreshRequestDeferres[keyString] = [];						
						dds.forEach(function(def){
							def.reject(err);
						});
					});
				}
				cacheRefreshRequestDeferres[keyString].push(deferred);							
			}			
			return deferred.promise;
		};

		var _put = function(option,value){
			var keyString = option.key;
			var storage = {};
			storage.data = value;
			storage.lastmodified = new Date().getTime();			
			localStorage.setItem(keyString,JSON.stringify(storage));
			memoryCache[keyString] = storage;
		};

			

		var service = {
			get: _get,
			put: _put
		};
		return service;
	}]);