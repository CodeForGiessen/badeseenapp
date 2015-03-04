"use strict";
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, LakeDataFavorite, FavData) {
		LakeDataFavorite.getData();
    	$scope.favorites = FavData.getAll();  
	});