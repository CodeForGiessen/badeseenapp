'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state, WeatherData) {
    	$scope.favorites = [];

        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList');
        };

        $scope.removeFavorite = function (lakeID) {
            FavData.remove(lakeID);
            $state.go($state.current, {}, {reload: true});
        };

        $scope.goToLake = function(lakeID) {
            $state.go('lake',{ id: lakeID });
        };

        $scope.$on('$ionicView.enter', function(){
            console.log('enter');
            var lakeIds = FavData.getAll();
            $q.all([
                $q.all(
                lakeIds.map(function(id){
                    return LakeData.getById(id);
                })),
                WeatherData.getAll(),

            ])
            .then(function(res){
                var favoriteLakes = res[0];
                var weatherDataAllLakes = res[1];

                $scope.favorites = favoriteLakes;
                $scope.weatherData = weatherDataAllLakes;
            })
            .catch(function(){
                //TODO handle
            });
        });

	});
