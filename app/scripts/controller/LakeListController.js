'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeData, LakeModal, FavData, $ionicActionSheet, $cordovaGeolocation, $ionicLoading, WeatherData, $q, $timeout,LocationUtils) {
		$scope.lakes = [];
		$scope.weatherData = [];
        $scope.error = false;
        $scope.init = true;


        var reload = function(){
            $ionicLoading.show();
            $q.all([
                LakeData.getAll(),
                WeatherData.getAll()
                ])
            .then(function(res){
                var lakes = res[0];
                var weatherdatas = res[1];

            	$scope.weatherData = weatherdatas;
                $scope.lakes = lakes;
                $scope.error = false;

                // Due to an angular bug an expression like error || init will not be evaluated a second time
                $timeout(function(){
                    $scope.init = false;
                });

                LocationUtils
                .getCurrentLocation(false)
                .then(function(currentPos){
                    $scope.lakes.forEach(function(lake){
                        lake.distance = LocationUtils.getDistanceFromPointToPoint({
                            lat: lake.latitude,
                            lng: lake.longitude
                        },currentPos);
                    });
                })
                .catch(function(err){
                    console.log(err);
                    //TODO
                    //Geo sensor disabled or not available
                });
            })
            .catch(function(err){
                console.log(err);
                $scope.error = true;
            })
            .finally(function(){
                $ionicLoading.hide();
                $timeout(function(){
                    ionic.trigger('resize',{
                        target:'window'
                    });
                });
            });
        };
        $scope.reload = reload;

        $scope.$on('$ionicView.enter', reload);




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

        $scope.filterKM = function () {
            // body...
        };

        $scope.filterRating = function () {
            //body
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
        };
        $scope.getWeatherIcon = function(id) {
        	var iconId = $scope.weatherData[id].current.weather[0].icon;
        	return WeatherData.getWeatherIconClassById(iconId);
        }
	});
