
'use strict';
angular.module('badeseenApp').factory('LakeUtils',
	function () {
		var getLatestYearRating = function(lake){
			var ratings = lake.yearratings;
			ratings.sort(function(a,b){
				return parseInt(a.year) - parseInt(b.year);
			});
			return ratings[ratings.length-1];
		};

		var service = {
			getLatestYearRating: getLatestYearRating
		};


		return service;
	});