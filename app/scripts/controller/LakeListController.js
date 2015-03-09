'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeData, LakeModal) {
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