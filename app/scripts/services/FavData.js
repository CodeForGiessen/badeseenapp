'use strict';
angular.module('badeseenApp').factory('FavData', 
	function () {
	
	var service = {
		getAll: function () {
			var favorites = [];
			favorites = localStorage.getItem('favorites');
			if(favorites){
				favorites = JSON.parse(favorites);
			}
			return favorites;
		}
	};

	return service;
})