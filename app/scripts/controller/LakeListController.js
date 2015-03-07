'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeDataImport, LakeData, LakeModal) {
		LakeDataImport.getData();
		$scope.lakes = [];
		LakeData.getAll()
		.then(function(lakes){
			$scope.lakes = lakes;
		})
		.catch(function(){
			//TODO handle
		});

		$scope.openModal = function (id) {
			LakeModal.openModal(id);
		};
	});