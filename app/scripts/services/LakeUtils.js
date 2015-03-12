
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
			getLatestYearRating: getLatestYearRating,
			getRatingByYear: function(lake,year){
				var yearString = year.toString();
				for(var i in lake.yearratings){
					var ele = lake.yearratings[i];
					if(ele.year === yearString){
						return ele;
					}
				}
				return;
			}

		};


		return service;
	});