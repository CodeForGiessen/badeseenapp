/**
Factory LakeData pulls the data for every lake from the localStorage, parses it into an Object and passes it on.
*/
'use strict';
angular.module('badeseenApp').factory('LakeData', 
	function ($q) {
	
	var service = {
		getAll: function () {
			var deferred = $q.defer();
			var lakes = [];
			lakes = localStorage.getItem('lakes');
			if(lakes){
				lakes = JSON.parse(lakes);
			}
			deferred.resolve(lakes);
			return deferred.promise;
		},
		getById: function (id) {

		},

	};

	return service;
});