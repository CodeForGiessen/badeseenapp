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

		$scope.rating = [];
		$scope.openModal = function (id) {
			LakeModal.openModal(id);
		};
		console.log($scope.rating);
		$scope.ratingClicked0 = 'false';
		$scope.ratingClicked1 = 'false';
		$scope.ratingClicked2 = 'false';

		$scope.switchRating = function (i) {
			//console.log('switch!');
			console.log($scope.rating);
			switch(i){
				case 0 : 
					if($scope.ratingClicked0 == 'false'){
						$scope.ratingClicked0 = 'true';
					} else {
						$scope.ratingClicked0 = 'false';
					}
					break;
				case 1 :
					if($scope.ratingClicked1 == 'false'){
						$scope.ratingClicked1 = 'true';
					} else {
						$scope.ratingClicked1 = 'false';
					}
					break;
				case 2 :
					if($scope.ratingClicked2 == 'false'){
						$scope.ratingClicked2 = 'true';
					} else {
						$scope.ratingClicked2 = 'false';
					}
					break;
			}
		}
	});