'use strict';
angular.module('badeseenApp').factory('FavData', 
	function () {
		var storagekey = 'favorites';
		var getAll = function(){
			var favorites = [];
			var storage = localStorage.getItem(storagekey);
			storage = localStorage.getItem(storagekey);
			if(storage){
				favorites = JSON.parse(storage);
			}
			return favorites;
		};


		var service = {
			/**
			 * [getAll Returns the lake ids of all favorited]
			 * @return {[Array]} [Array of lake ifs]
		 	*/
			getAll: getAll,
			/**
			 * [add Adds one lakeid to the storage]
			 * @param {[String]} id [Lakeid]
			 */
			add: function(id){
				var favorites = getAll();
				favorites.push(id);
				//unique
				favorites = favorites.filter(function(item, pos) {
    				return favorites.indexOf(item) === pos;
				});
				localStorage.setItem(storagekey, JSON.stringify(favorites));
			}
		};

		return service;
});