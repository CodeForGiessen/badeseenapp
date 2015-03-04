'use strict';
angular.module('badeseenApp').controller('LakeListController',
<<<<<<< HEAD
	function () {
		
=======
	function ($scope, $ionicModal, LakeDataImport, LakeData) {
		LakeDataImport.getData();
		$scope.lakes = LakeData.getAll();
		$ionicModal.fromTemplateUrl('templates/lakeModal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {$scope.modal = modal});

		$scope.openModal = function (lake) {

			$scope.modal.show();
			$scope.lake = lake;
		}
>>>>>>> b4c0e12fa6c6090a5d46273ddbaa359d88b5327a
	})