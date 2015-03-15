'use strict';
angular.module('badeseenApp')
.factory('MessagesModal',
	function ($rootScope,MessagesData,$ionicModal, $ionicLoading) {
        var scope = $rootScope.$new();
        $ionicModal.fromTemplateUrl('templates/messagesModal.html', {
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
                     MessagesData.getById(lakeId)
                    .then(function(messages){
                        scope.messages = messages;   
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