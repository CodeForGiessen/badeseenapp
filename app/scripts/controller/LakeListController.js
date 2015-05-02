'use strict';
angular.module('badeseenApp').controller('LakeListController',
	function ($scope, $ionicModal, LakeData, LakeModal, FavData, $ionicActionSheet, $cordovaGeolocation, $ionicLoading, WeatherData, $q, $timeout,LocationUtils) {
		$scope.lakes = [];
		$scope.weatherData = [];
        $scope.error = false;
        $scope.init = true;

        $scope.sortKey = 'name';
        $scope.sortText = 'KM';
        $scope.distanceReady = false;


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
                    $scope.distanceReady = true;
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
                $scope.sortText = 'ABC';
            }else{
                $scope.sortKey ='name';
                $scope.sortText = 'KM';
            }

        };

        $scope.getWeatherIcon = function(id) {
        	var iconId = $scope.weatherData[id].current.weather[0].icon;
        	return WeatherData.getWeatherIconClassById(iconId);
        }
	});
