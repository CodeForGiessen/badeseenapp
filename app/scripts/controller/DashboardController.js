'use strict';
angular.module('badeseenApp').controller('DashboardController',
	function ($scope, FavData, LakeData,$q) {
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
	});