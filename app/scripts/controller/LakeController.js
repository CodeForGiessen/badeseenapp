'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData, WeatherData,FavData, $q, LakeUtils,$window, $ionicHistory, $ionicLoading, MessagesData, MessagesModal) {
		var id = $stateParams.id;

        $scope.error = false;
        $scope.init = true;
        // back directive does not work every time
        $scope.goBack = $ionicHistory.goBack;
        $scope.lake= {};
        


        var reload = function(){
            $ionicLoading.show();
            
            $scope.isFav = FavData.isFav(id);
            $q.all([
                LakeData.getById(id),
                WeatherData.getById(id),
                MessagesData.getById(id)
                ])
            .then(function(res){
                var lake = res[0];
                var weatherdata = res[1];
                var messages = res[2];
                $scope.lake = lake;   
                $scope.rating = LakeUtils.getLatestYearRating(lake);
                $scope.weatherdata = weatherdata;
                $scope.messages = messages;
                $scope.error = false;
                $scope.init = false;                
            })
            .catch(function(err){ 
                console.log(err);
                $scope.error = true;
            })
            .finally(function(){
                $ionicLoading.hide();
                
                ionic.trigger('resize',{
                    target:'window'
                });
            });
        };

        $scope.reload = reload;

        $scope.$on('$ionicView.enter', reload);

        $scope.toogleFav = function(){
            $scope.isFav = FavData.toogleFav(id);
        };

        $scope.openLinkExtern = function(link){
            if(link){
                link = link.toLowerCase();
                if(link.indexOf('http://') !== 0 &&  link.indexOf('https://') !== 0){
                    link = 'http://' + link;
                }
                $window.open(link,'_system');
            }
        };

        $scope.openMessageModal = function(){
            MessagesModal.openModal($scope.lake._id);
        };
	});