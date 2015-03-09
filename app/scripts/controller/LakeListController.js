'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeDataImport, LakeData) {
		LakeDataImport.getData();
		$scope.lakes = [];
		LakeData.getAll()
		.then(function(lakes){
			$scope.lakes = lakes;
		})
		.catch(function(){
			//handle error
		});



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
			$scope.rating = [];
			$scope.lake.yearratings.forEach(function (cur, index) {
				switch(cur.rating){
					case 1 : $scope.rating[index] = 'Ausgezeichnet'; break;
					case 2 : $scope.rating[index] = 'Gut'; break;
					case 3 : $scope.rating[index] = 'Ausreichend'; break;
					case 4 : $scope.rating[index] = 'Mangelhaft'; break;
					case 5 : $scope.rating[index] = 'Baden verboten'; break;
					case 6 : $scope.rating[index] = 'Baden abgeraten'; break;
					case 7 : $scope.rating[index] = 'Neu'; break;
					default : $scope.rating[index] = 'Ohne Bewertung'; break;
				}
				
			})
			console.log($scope.rating);
		};
		$scope.ratingClicked0 = 'false';
		$scope.ratingClicked1 = 'false';
		$scope.ratingClicked2 = 'false';

		$scope.switchRating = function (i) {
			//console.log('switch!');
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