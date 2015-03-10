'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData, $q, $state) {
    	$scope.favorites = [];
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
        $scope.goToLakeList = function () {
            $state.go ('tabs.lakeList')
        };

        $scope.removeFavorite = function (lakeID) {

        }; 
	});