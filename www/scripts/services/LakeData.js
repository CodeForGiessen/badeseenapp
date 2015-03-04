/**
Factory LakeData pulls the data for every lake from the localStorage, parses it into an Object and passes it on.
*/
'use strict';
angular.module('badeseenApp').factory('LakeData', 
	function () {
	
<<<<<<< HEAD
=======
	var service = {
		getAll: function () {
			var lakes = [];
			lakes = localStorage.getItem('lakes');
			if(lakes){
				lakes = JSON.parse(lakes);
			}
			return lakes;
		},
		getById: function (id) {

		},

	};

	return service;
>>>>>>> b4c0e12fa6c6090a5d46273ddbaa359d88b5327a
})