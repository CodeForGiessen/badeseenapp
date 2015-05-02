'use strict';
angular.module('badeseenApp')
.factory('LakeModal',
	function ($rootScope,LakeData, $ionicModal, WeatherData,MessagesData,LakeUtils,$q, $state, $ionicLoading, MessagesModal, $timeout) {
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

                scope.errorOrInit = scope.error || scope.init;
                scope.lake= {};

                var reload = function(){
                    $ionicLoading.show();
                    console.log(lakeId);
                    $q.all([
                        LakeData.getById(lakeId),
                        WeatherData.getById(lakeId),
                        MessagesData.getById(lakeId)
                        ])
                    .then(function(res){
                        var lake = res[0];
                        var weatherdata = res[1];
                        var messages = res[2];
                        scope.lake = lake;
                        scope.rating = LakeUtils.getLatestYearRating(lake);
                        scope.weatherdata = weatherdata;
                        scope.messages = messages;
                        scope.error = false;
                        scope.init = false;
                    })
                    .catch(function(err){
                        console.log(err);
                        scope.error = true;
                    })
                    .finally(function(){
                        //Due to an angular bug an expression like error || init will not be evaluated a second time
                        scope.errorOrInit = scope.error || scope.init;
                        $ionicLoading.hide();

                        $timeout(function(){
                            ionic.trigger('resize',{
                                target:'window'
                            });
                        });
                    });
                };
                scope.modal.show();
                scope.reload = reload;
                reload();


                scope.openMessageModal = function(){
                    MessagesModal.openModal(scope.lake._id);
                };
                scope.goSinglePage = function(){
                    scope.modal.hide();
                    $state.go('lake',{
                        id:scope.lake._id
                    });
                };
            }
        };
	});