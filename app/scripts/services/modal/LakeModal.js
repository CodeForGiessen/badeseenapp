/**
Model Lake represents every attribute of a lake.
*/
'use strict';
angular.module('badeseenApp')
.factory('LakeModal',
	function ($rootScope,LakeData, $ionicModal, WeatherData,MessagesData,LakeUtils,$q, $state, $ionicLoading, MessagesModal, $timeout, $ionicScrollDelegate) {
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
                        //Due to an angular bug an expression like error || init will not be evaluated a second time
                        $timeout(function(){
                            scope.init = false;
                        });
                    })
                    .catch(function(err){
                        console.log(err);
                        scope.error = true;
                    })
                    .finally(function(){
                        $ionicLoading.hide();

                        $timeout(function(){
                            ionic.trigger('resize',{
                                target:'window'
                            });
                        });
                    });
                };
                $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
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