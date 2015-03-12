/**
Model Lake represents every attribute of a lake.
*/
'use strict';
angular.module('badeseenApp')
.factory('RatingModal',
	function ($rootScope,LakeData,$ionicModal) {
        var scope = $rootScope.$new();
        $ionicModal.fromTemplateUrl('templates/ratingModal.html', {
           animation: 'slide-in-up',
           scope: scope
        })
        .then(function (modal) {
            scope.modal = modal;
        });

        scope.ratingToString = function(ratingint){
             switch(ratingint){
                case 1:
                return 'Ausgezeichnete Qualität';
                case 2:
                return 'Gute Qualität';
                case 3:
                return 'Ausreichende Qualität';
                case 4:
                return 'Mangelhafte Qualität';
                case 5:
                return 'Baden verboten';
                case 6:
                return 'Abraten vom Baden';
                default:
                return 'Zu diesem Zeitpunkt noch nicht bewertet';
             }
        };
        scope.showEu = false;
        scope.iconButtonSwitchText = 'EU-Icons einblenden';
        scope.switchIcons = function(){
            scope.showEu = !scope.showEu;
            if(scope.showEu){
                scope.iconButtonSwitchText = 'EU-Icons ausblenden';
            }else{
                scope.iconButtonSwitchText = 'EU-Icons einblenden';
            }

        };

        return {
            openModal : function(lakeId){
                LakeData.getById(lakeId)
                .then(function(lake){
                    scope.modal.show();
                    scope.lake = lake;
                })
                .catch(function(){
                    //TODO handle
                });
            }
        };
	});