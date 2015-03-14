/**
Factory LakeData pulls the data for every lake from the localStorage, parses it into an Object and passes it on.
*/
'use strict';
angular.module('badeseenApp').factory('LoadingScreen',['$ionicLoading',
	function ($ionicLoading) {	

		var show = function(){
			$ionicLoading.show({
				templateUrl: 'templates/loading-screen.html',
				noBackdrop: false
			});
		};


		var hide = function(){
			$ionicLoading.hide();
		};


		var service = {			
			show: show,
			hide: hide,
		};


		return service;
	}]);