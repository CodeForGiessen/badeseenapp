'use strict';
angular.module('badeseenApp').factory('FavData', 
	function () {
		var storagekey = 'favorites';
		var getAll = function(){
			var favorites = [];
			var storage = localStorage.getItem(storagekey);
			if(storage){
				favorites = JSON.parse(storage);
			}
			return favorites;
		};

		var isFav = function(id){
			var favorites = getAll();
			return favorites.indexOf(id) > -1;
		};

		var add = function(id){
			if(!isFav(id)){
				var favorites = getAll();
				favorites.push(id);
				localStorage.setItem(storagekey, JSON.stringify(favorites));
			}
		};
		var remove = function(id){
			var favorites = getAll();
			var index = favorites.indexOf(id);
			if (index > -1) {
				favorites.splice(index, 1);
			}
			localStorage.setItem(storagekey, JSON.stringify(favorites));
		};


		var service = {
			/**
			 * [getAll Returns the lake ids of all favorited]
			 * @return {[Array]} [Array of lake ifs]
		 	*/
			getAll: getAll,
			/**
			 * [add Adds one lakeid to the storage. Is idempotent.]
			 * @param {[String]} id [Lakeid]
			 */
			add: add,
			/**
			 * [remove Removes a lakeid from the storage. Is idempotent.]
			 * @param {[type]} id [Lakeid]
			 */
			remove: remove,

			/**
			 * [isFav Returns true if this lake id is a favorite.]
			 * @param {[type]} id [Lakeid]
			 * @return {Boolean} [Lake is a favourite or not]
			 */
			isFav: isFav,

			/**
			 * [toogleFav Adds the lake if the lake is not a favourite and the other way round.]
			 * @param {[type]} id [Lakeid]
			 * @return {[type]} [New state]
			 */
			toogleFav: function(id){

				if(isFav(id)){
					remove(id);
				}else{
					add(id);
				}
				return isFav(id);
			}
		};

		return service;
});