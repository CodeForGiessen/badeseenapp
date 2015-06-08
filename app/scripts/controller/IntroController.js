'use strict';
angular.module('badeseenApp').controller('IntroController',
    function ($state, $ionicLoading, LakeData, FavData, WeatherData, MessagesData , $ionicPopup, $q, $ionicHistory) {
        var resetApp = false;

        var startApp = function(){
            $ionicLoading.hide();
            $state.go('tabs.dash');
            $ionicHistory.clearHistory();

        };


        if(resetApp){
            localStorage.clear();
        }
        startApp();
    });