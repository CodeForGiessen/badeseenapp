'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state, $ionicLoading, $timeout, WeatherData, MessagesData, MessagesModal, LocationUtils) {
    	$scope.favorites = [];

        $scope.error = false;
        $scope.init = true;

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

        $scope.getDistance = function(lakeID) {
            var currPosition = LocationUtils.getCurrentLocation().then(function(res){});
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
                $scope.init = false;

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

        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList');
        };

        $scope.removeFavorite = function (lakeID) {
            FavData.remove(lakeID);
            $state.go($state.current, {}, {reload: true});
        };
	});
