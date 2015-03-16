'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state, WeatherData, MessagesData, MessagesModal) {
    	$scope.favorites = [];

        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList');
        };

        $scope.removeFavorite = function (lakeID) {
            FavData.remove(lakeID);
            $state.go($state.current, {}, {reload: true});
        };

        $scope.openMessageModal = function(lakeID){
            MessagesModal.openModal(lakeID);
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
                MessagesData.getAll()
            ])
            .then(function(res){
                $scope.favorites = res[0];
                $scope.weather = res[1];
                $scope.messages = res[2];
            })
            .catch(function(){
                //TODO handle
            });
        });

	});
