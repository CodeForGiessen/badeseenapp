/**
Model Lake represents every attribute of a lake.
*/
'use strict';
angular.module('badeseenApp')
.factory('LakeModal',
	function ($rootScope,LakeData, $ionicModal) {
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
                console.log(lakeId);
                LakeData.getById(lakeId)
                .then(function(lake){
                    console.log(lake);
                    scope.modal.show();
                    scope.lake = lake;
                })
                .catch(function(){
                    //TODO handle
                });
            }
        };
	});