/**
Model Lake represents every attribute of a lake.
*/
'use strict';
angular.module('badeseenApp')
.factory('LakeModal',
	function ($rootScope,LakeData, $ionicModal, WeatherData,LakeUtils,$q, $state, $ionicLoading) {
        var scope = $rootScope.$new();
        $ionicModal.fromTemplateUrl('templates/lakeModal.html', {
           animation: 'slide-in-up',
           scope: scope
        })
        .then(function (modal) {
            scope.modal = modal;
        });
        return {
            openModal : function(lakeId){
                scope.error = false;
                scope.init = true;
                scope.lake= {};

                var reload = function(){
                    $ionicLoading.show();
                    $q.all([
                        LakeData.getById(lakeId),
                        WeatherData.getById(lakeId)
                        ])
                    .then(function(res){
                        var lake = res[0];
                        var weatherdata = res[1];

                        scope.lake = lake;   
                        scope.rating = LakeUtils.getLatestYearRating(lake);
                        scope.weatherdata = weatherdata;
                        scope.error = false;
                        scope.init = false;
                    })
                    .catch(function(err){ 
                        console.log(err);
                        scope.error = true;
                    })
                    .finally(function(){                       
                        $ionicLoading.hide();
                        ionic.trigger('resize',{
                            target:'window'
                        });                
                    });
                };
                scope.modal.show();
                scope.reload = reload;
                reload();                   
            }
        };
	});