'use strict';
angular.module('badeseenApp').controller('IntroController',
    function ($state, $ionicLoading, LakeData, FavData, WeatherData, $ionicPopup, $q) {
        var testData = false;
        var resetApp = true;

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

        var initApp = function(){
            $ionicLoading.show({
                template: 'loading'
            });

            return $q.all([
                LakeData.prepareCache(),
                WeatherData.prepareCache()
            ])
            .then()
                .then(function(){
                    return addTestData();
                })
                .then(function(){           
                    startApp();            
                })
                .catch(function(err){
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Keine Internetverbindung',
                        template: 'Keine Internetverbindung. Erneut versuchen?'
                    })
                    .then(function(){
                        initApp();    
                    });
                    
                });
        };
        initApp();

    });