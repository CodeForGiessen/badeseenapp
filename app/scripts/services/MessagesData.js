'use strict';
angular.module('badeseenApp').factory('MessagesData',['$q', 'ENV', '$http', 'KeyCache',
	function ($q,ENV, $http,KeyCache) {
		var allMessagesKey = 'messagesCache.allmessages';
		var maxAge = ENV.cachesMaxAge.weather;
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		var timeout = ENV.requestTimeout;

		var rebuild = function(){
			return $http.get(lakesUrl + '/allmessages',{
				timeout: timeout
			})
			.then(function(response){
				return response.data.messages;
			});
		};

		var option ={
			key: allMessagesKey,
			rebuild: rebuild,
			maxAge: maxAge
		};

		var getAll = function () {
			return KeyCache.get(option);
		};

		var getById = function (id) {
		 	return KeyCache.get(option)
			.then(function(idToMessagesMap){
				return idToMessagesMap[id];
			});
		};

		

		var service = {
			
			/**
			 * [getAll Returns all messages mapped by the id of the lake]
			 * @return {[QPromise]} [QPromise. Gets resolved with all messages. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getAll: getAll,
			/**
			 * [getById Returns an Array of messages for a lake]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with an Array of all messages for this lake lake or undefined if no lake with this id exists. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getById: getById			
		};
		return service;
	}]);