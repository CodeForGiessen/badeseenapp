'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state, $ionicLoading, $timeout, $ionicPopup, WeatherData, MessagesData, MessagesModal, LocationUtils, AboutModal) {
    	$scope.favorites = [];
        $scope.error = false;
        $scope.init = true;
        $scope.locationmiss = false;

        var chunk = function(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        };

        $scope.openMessageModal = function(lakeID){
            MessagesModal.openModal(lakeID);
        };

		$scope.openAboutModal = function(){
			AboutModal.openModal();
		};

        var reloadLocation = function(){
            $scope.locationmiss = false;
            LocationUtils
                .getCurrentLocation(false)
                .then(function(currentPos){
                    $scope.favorites.forEach(function(lake){
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

            var lakeIds = FavData.getAll();
            $q.all([
                $q.all(
                lakeIds.map(function(id){
                    return LakeData.getById(id);
                })),
                WeatherData.getAll(),
                MessagesData.getAll()
            ])
            .then(function(res){
                $scope.favorites = res[0];
                $scope.weather = res[1];
                $scope.messages = res[2];
                $scope.rows = chunk($scope.favorites,2);
                $scope.error = false;

                //Due to an angular bug an expression like error || init will not be evaluated a second time
                $timeout(function(){
                    $scope.init = false;
                });

                $scope.reloadLocation();
            })
            .catch(function(err){
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

        $scope.$on('$ionicView.enter', reload);

        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList');
        };

        // A confirm dialog
        $scope.showConfirm = function(lakeID) {
            $ionicPopup.confirm({
                title: 'Favorit entfernen',
            })
            .then(function(res) {
                if(res) {
                    removeFavorite(lakeID);
                }
            });
        };

        var removeFavorite = function (lakeID) {
            FavData.remove(lakeID);
            $state.go($state.current, {}, {reload: true});
        };

	});
