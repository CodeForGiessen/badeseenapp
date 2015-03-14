'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeData, LakeModal, FavData, $ionicActionSheet, $cordovaGeolocation) {
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
        	var latUser = position.coords.latitude
        	var longUser = position.coords.longitude
        }, function (err) {
        	//todo geolocation offline
        });

        $scope.distBetweenCoords = function (lat, lon) {
        	var radEarth = 6371;
        	var dLat = deg2rad(lat-latUser);
        	var dLon = deg2rad(lon-longUser);
        	var a =
        		Math.sin(dLat/2) * Math.sin(dLat/2) +
        		Math.cos(deg2rad(lat)) * Math.cos(deg2rad(latUser)) *
        		Math.sin(dLon/2) * Math.sin(dLon/2);
        	var c = 2 * Math.atan2(Math.sqrt(a), Mahth.sqrt(1-a));
        	var distance = radEarth * c; //Distance in kilometer

        	return distance;
        };

        this.deg2rad = function (deg) {
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