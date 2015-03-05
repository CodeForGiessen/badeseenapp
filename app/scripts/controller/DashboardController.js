"use strict";
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, LakeDataFavorite, FavData, $ionicModal) {
		LakeDataFavorite.getData();
    	$scope.favorites = FavData.getAll();  

    	$ionicModal.fromTemplateUrl('templates/lakeModal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		})
		.then(function (modal) {
			$scope.modal = modal;
		});

		$scope.openModal = function (lake) {
			$scope.modal.show();
			$scope.lake = lake;
		};
	});