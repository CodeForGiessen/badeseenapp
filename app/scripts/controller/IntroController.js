'use strict';
angular.module('badeseenApp').controller('IntroController',
    function ($state, $ionicLoading, LakeData, FavData, WeatherData, MessagesData , $ionicPopup, $q) {
        var resetApp = false;

        var addTestData = function(){
            if(testData){
                return LakeData.getAll()
                .then(function(lakes){
                    for(var i =0;i<4;i++){
                        FavData.add(lakes[i]._id);
                    }
                });
            }
            return;
        };

        var startApp = function(){
            $ionicLoading.hide();
            $state.go('tabs.dash');
        };


        if(resetApp){
            localStorage.clear();
        }
        startApp();
    });