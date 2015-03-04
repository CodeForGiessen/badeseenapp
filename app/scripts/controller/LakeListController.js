'use strict';
angular.module('badeseenApp').controller('LakeListController',
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
	})