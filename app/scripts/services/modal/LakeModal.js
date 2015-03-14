/**
Model Lake represents every attribute of a lake.
*/
'use strict';
angular.module('badeseenApp')
.factory('LakeModal',
	function ($rootScope,LakeData, $ionicModal, WeatherData,LakeUtils,$q, $state) {
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
                    scope.goSinglePage = function(){
                        scope.modal.hide();
                        $state.go('lake',{
                            id:scope.lake._id
                        });
                    };
                    scope.modal.show();
                })
                .catch(function(err){
                    //TODO handle
                    console.log(err);
                });   
            }
        };
	});