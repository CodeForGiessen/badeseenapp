/**
Factory LakeData pulls the data for every lake from the localStorage, parses it into an Object and passes it on.
*/
'use strict';
angular.module('badeseenApp').factory('LakeData',['$q', 'ENV', '$http',
	function ($q,ENV, $http) {
		var allLakesKey ='lakeCache.alllakes';
		var allLakesMemorycache;

		//1 hour
		// var maxAge = 3600000;
		//1 week
		// var maxAge = 604800000;		
		var maxAge = 10;
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		var timeout = ENV.requestTimeout;

		//array of promises which much resolved or rejected if the request fails
		var cacheRefreshRequestDeferres = [];



		var _isUptoDate = function(){
			if(allLakesMemorycache){
				var lastmodified = allLakesMemorycache.lastmodified;
				var current = new Date();
				return (current.getTime() <= lastmodified + maxAge );
			}
			return false;
		};

		var _get = function(){
			var deferred = $q.defer();
			if(!allLakesMemorycache){
				allLakesMemorycache = localStorage.getItem(allLakesKey);
				if(allLakesMemorycache){
					allLakesMemorycache = JSON.parse(allLakesMemorycache);					
				}
			}
			if(_isUptoDate()){
				deferred.resolve(allLakesMemorycache.data);
			}else{
				var promise = _rebuildCache()
				.then(function(){
					return allLakesMemorycache.data;
				});
				deferred.resolve(promise);
			}
			
			return deferred.promise;
		};

		var _put = function(value){
			var storage = {};
			storage.data = value;
			storage.lastmodified = new Date().getTime();			
			localStorage.setItem(allLakesKey,JSON.stringify(storage));
			allLakesMemorycache = storage;
		};

		var _rebuildCache = function(){
			var deferred = $q.defer();
			
			if(!cacheRefreshRequestDeferres.length){
				//no request running
				$http.get(lakesUrl + '/all',{
					timeout: timeout
				})
				.then(function(response){
					var lakes = response.data.lakes;
					var allLakes ={};
					lakes.forEach(function(lake){
						allLakes[lake._id] = lake;
					});				
					_put(allLakes);
					var deferres = cacheRefreshRequestDeferres;
					cacheRefreshRequestDeferres = [];
					deferres.forEach(function(def){
						def.resolve();
					});
				})
				.catch(function(response){
					var deferres = cacheRefreshRequestDeferres;
					cacheRefreshRequestDeferres = [];
					deferres.forEach(function(def){
						def.reject(response);
					});
				});
			}
			cacheRefreshRequestDeferres.push(deferred);		

			return deferred.promise;
		};			

		var getAll = function () {
			return _get()
			.then(function(idToLakeMap){
				var lakeIds= Object.keys(idToLakeMap);
				var lakes = lakeIds.map(function(id){
					return idToLakeMap[id];
				});	
				return lakes;
			});
		};

		var getById = function (id) {
		 	return _get()
			.then(function(idToLakeMap){
				return idToLakeMap[id];
			});
		};

		var service = {
			/**
			 * [prepareCache This method fills / updates the cache if elements are outdated. This method must be execute once at start of the app.]
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
			 * @return {[QPromise]} [QPromise. Gets resolved with the lakes. Gets resolved every time.]
			 */
			getAll: getAll,
			/**
			 * [getById Returns a lake by id]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with the lake or undefined if no lake with this id exists. ]
			 */
			getById: getById

		};


		return service;
	}]);