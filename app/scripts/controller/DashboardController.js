'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state) {
    	$scope.favorites = [];
         
        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList');
        };

        $scope.removeFavorite = function (lakeID) {

        };

        $scope.$on('$ionicView.enter', function(){
            console.log('enter');
            var lakeIds = FavData.getAll();
            $q.all(lakeIds.map(function(id){
                return LakeData.getById(id);
            }))
            .then(function(lakes){
                $scope.favorites = lakes;
            })
            .catch(function(){
                //TODO handle
            });
        });
	});