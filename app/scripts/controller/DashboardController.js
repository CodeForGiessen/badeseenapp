'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state, WeatherData) {
    	$scope.favorites = [];

        var chunk = function(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            return newArr;
        }

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

                $scope.rows = chunk(favoriteLakes,2);
                $scope.favorites = favoriteLakes;
                $scope.weatherData = weatherDataAllLakes;
            })
            .catch(function(){
                //TODO handle
            });
        });

        
        

	});
