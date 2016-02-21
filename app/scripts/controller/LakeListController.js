'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, $ionicPopup, LakeData, LakeModal, FavData, $ionicActionSheet, $cordovaGeolocation, $ionicLoading, WeatherData, $q, $timeout,LocationUtils,$state) {
		$scope.lakes = [];
		$scope.weatherData = [];
        $scope.error = false;
        $scope.init = true;
        $scope.locationmiss = false;


        $scope.sortKey = 'name';
        $scope.sortText = 'ABC';
        $scope.distanceReady = false;


        var reloadLocation = function(){
            $scope.locationmiss = false;
            LocationUtils
                .getCurrentLocation(false)
                .then(function(currentPos){
                    $scope.distanceReady = true;
                    $scope.lakes.forEach(function(lake){
                        lake.distance = LocationUtils.getDistanceFromPointToPoint({
                            lat: lake.latitude,
                            lng: lake.longitude
                        },currentPos);
                    });
                })
                .catch(function(err){
                    $scope.locationmiss = true;
                });
        };

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

                $scope.reloadLocation();
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
        $scope.reloadLocation = reloadLocation;

        $scope.openLake = function(id){
            console.log('openLake');
            $state.go('lake',{id:id})
        };
        console.log($scope.openLake);

        $scope.$on('$ionicView.enter', reload);

		$scope.openModal = function (id) {
			LakeModal.openModal(id);
		};

		this.searchQuery = '';

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

        $scope.toggleSort = function(){
            if($scope.sortKey === 'name'){
                $scope.sortKey ='distance';
                $scope.sortText = 'KM';
            }else{
                $scope.sortKey ='name';
                $scope.sortText = 'ABC';
            }
        };

        $scope.getWeatherIcon = function(id) {
        	var iconId = $scope.weatherData[id].current.weather[0].icon;
        	return WeatherData.getWeatherIconClassById(iconId);
        };
	});
