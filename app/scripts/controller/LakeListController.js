'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeData, LakeModal, FavData, $ionicActionSheet, $cordovaGeolocation, $ionicLoading) {
		$scope.lakes = [];
        $scope.error = false;
        $scope.init = true;


        var reload = function(){
            $ionicLoading.show();
            LakeData.getAll()
            .then(function(lakes){
                $scope.lakes = lakes;
                $scope.error = false;               
            })
            .catch(function(err){
                console.log(err);
                $scope.error = true;
            })
            .finally(function(){
                $scope.init = false;
                $ionicLoading.hide();
                ionic.trigger('resize',{
                    target:'window'
                });
            });
        };
        $scope.reload = reload;


        $scope.$on('$ionicView.enter', reload);
        // reload();

		

		$scope.rating = [];
		$scope.openModal = function (id) {
			LakeModal.openModal(id);
		};
		console.log($scope.rating);
		$scope.ratingClicked0 = 'false';
		$scope.ratingClicked1 = 'false';
		$scope.ratingClicked2 = 'false';
		
		this.searchQuery = '';

		$scope.switchRating = function (i) {
			//console.log('switch!');
			console.log($scope.rating);
			switch(i){
				case 0 : 
					if($scope.ratingClicked0 === 'false'){
						$scope.ratingClicked0 = 'true';
					} else {
						$scope.ratingClicked0 = 'false';
					}
					break;
				case 1 :
					if($scope.ratingClicked1 === 'false'){
						$scope.ratingClicked1 = 'true';
					} else {
						$scope.ratingClicked1 = 'false';
					}
					break;
				case 2 :
					if($scope.ratingClicked2 === 'false'){
						$scope.ratingClicked2 = 'true';
					} else {
						$scope.ratingClicked2 = 'false';
					}
					break;
			}
		};

		this.searchActive = false;
		
        if (localStorage.getItem('saveQuery')) {
            this.searchActive = true;
            this.searchQuery = JSON.parse(localStorage.getItem('saveQuery'));
            localStorage.removeItem('saveQuery');
        }
        this.toggleSearch = function () {
            if (this.searchActive) {
                this.searchQuery = '';
            }
            this.searchActive = !this.searchActive;
        };

        var posOptions = {enableHighAccuracy: false};
        $cordovaGeolocation
        .getCurrentPosition (posOptions)
        .then(function (position) {
        	$scope.latUser = position.coords.latitude
        	$scope.longUser = position.coords.longitude
        }, function (err) {
        	//todo geolocation offline
        });

        //Distance calculation between two geo-coordinates with
        $scope.distBetweenCoords = function (lat, lon) {
        	var radEarth = 6371;
        	var dLat = $scope.deg2rad(lat-$scope.latUser);
        	var dLon = $scope.deg2rad(lon-$scope.longUser);
        	var a =
        		Math.sin(dLat/2) * Math.sin(dLat/2) +
        		Math.cos($scope.deg2rad(lat)) * Math.cos($scope.deg2rad($scope.latUser)) *
        		Math.sin(dLon/2) * Math.sin(dLon/2);
        	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        	var distance = radEarth * c; //Distance in kilometer

        	return distance;
        };

        $scope.deg2rad = function (deg) {
        	return deg * (Math.PI/180)
        };

        $scope.show = function (){
        	var hideSheet = $ionicActionSheet.show({
        		buttons: [{
        			text: 'Entfernung'},
        			{text: 'Rating'
        		}],
        		//destructiveText: 'Filter anwenden',
        		titleText: 'Filter anwenden',
        		cancelText: 'Abbrechen',
        		cancel: function(){
        			//todo
        		}
        	});
        }
	});