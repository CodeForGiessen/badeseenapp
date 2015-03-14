/**
Factory LakeData pulls the data for every lake from the localStorage, parses it into an Object and passes it on.
*/
'use strict';
angular.module('badeseenApp').factory('LakeData',['$q', 'ENV', '$http', 'KeyCache',
	function ($q,ENV, $http,KeyCache) {
		var allLakesKey ='lakeCache.alllakes';		//1 hour
		var maxAge = 3600000;
		//1 week
		// var maxAge = 604800000;		
		// var maxAge = 10;
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		var timeout = ENV.requestTimeout;

		var rebuild = function(){
			console.log('rebuild');
			return $http.get(lakesUrl + '/all',{
				timeout: timeout
			})
			.then(function(response){
				var lakes = response.data.lakes;
				var allLakes ={};
				lakes.forEach(function(lake){
					allLakes[lake._id] = lake;
				});
				return allLakes;
			});
		};

		var option ={
			key: allLakesKey,
			rebuild: rebuild,
			maxAge: maxAge
		};

		var getAll = function () {
			return KeyCache.get(option)
			.then(function(idToLakeMap){
				var lakeIds= Object.keys(idToLakeMap);
				var lakes = lakeIds.map(function(id){
					return idToLakeMap[id];
				});	
				return lakes;
			});
		};

		var getById = function (id) {
		 	return KeyCache.get(option)
			.then(function(idToLakeMap){
				return idToLakeMap[id];
			});
		};

		var service = {			
			/**
			 * [getAll Returns all lakes]
			 * @return {[QPromise]} [QPromise. Gets resolved with the lakes. Gets rejected if request timed out or an error occurred.]
			 */
			getAll: getAll,
			/**
			 * [getById Returns a lake by id]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with the lake or undefined if no lake with this id exists. Gets rejected if request timed out or an error occurred.]
			 */
			getById: getById

		};


		return service;
	}]);