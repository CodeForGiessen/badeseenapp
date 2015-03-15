'use strict';
angular.module('badeseenApp').controller('IntroController',
    function ($state, $ionicLoading, LakeData, FavData, WeatherData, MessagesData , $ionicPopup, $q) {
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
            $ionicLoading.show();
            return $q.all([
                LakeData.getAll(),
                WeatherData.getAll(),
                MessagesData.getAll()
                ])
            // .then(function(res){
            //     var alllakes = res[0];
            //     var allweatherdatas = res[1];
            //     var allmessages = res[2];
            //     console.log(allmessages);
            // })
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