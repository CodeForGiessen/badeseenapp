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
		var maxAge = 604800000;
		
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		
		var _isUptoDate = function(){
			//load data
			_get();
			if(allLakesMemorycache){
				var lastmodified = allLakesMemorycache.lastmodified;
				var current = new Date();
				return (current.getTime() <= lastmodified + maxAge );
			}
			return false;
		};

		var _get = function(){
			if(!allLakesMemorycache){
				allLakesMemorycache = localStorage.getItem(allLakesKey);
				if(allLakesMemorycache){
					allLakesMemorycache = JSON.parse(allLakesMemorycache);
				}else{
					return undefined;
				}
			}
			return allLakesMemorycache.data;
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
			$http.get(lakesUrl)
			.then(function(response){
				var lakes = response.data.lakes;
				var allLakes ={};
				lakes.forEach(function(lake){
					allLakes[lake._id] = lake;
				});
				_put(allLakes);
				deferred.resolve();
			})
			.catch(function(response){
				deferred.reject(response);
			});

			return deferred.promise;
		};

		var getAll = function () {
			var deferred = $q.defer();			
			var idToLakeMap = _get();
			var lakeIds= Object.keys(idToLakeMap);
			var lakes = lakeIds.map(function(id){
				return idToLakeMap[id];
			});	
			deferred.resolve(lakes);
			return deferred.promise;
		};

		var getById = function (id) {
			var deferred = $q.defer();
			var idToLakeMap = _get();
			deferred.resolve(idToLakeMap[id]);
			return deferred.promise;
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
			 * @return {[QPromise]} [QPromise. Gets resolved with the lake or undefined if no lake with this id exists. Gets rejected if cache is not ready AND request for new data failed.]
			 */
			getById: getById

		};


		return service;
	}]);