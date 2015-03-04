"use strict";
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, LakeData, LakeDataImport) {
		LakeDataImport.getData();
		$scope.lakes = LakeData.getAll();

		/*addFavorite= function(){

		};*/
	});