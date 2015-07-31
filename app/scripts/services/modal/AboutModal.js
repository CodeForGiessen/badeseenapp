'use strict';
angular.module('badeseenApp')
.factory('AboutModal',
	function ($rootScope, $ionicModal, $ionicLoading, $timeout, $ionicScrollDelegate, $window) {
        var scope = $rootScope.$new();
        $ionicModal.fromTemplateUrl('templates/aboutModal.html', {
           animation: 'slide-in-up',
           scope: scope
        })
        .then(function (modal) {
            scope.modal = modal;
        });

        scope.contributors = [
        {name:'Christian Schulze',task:'Service'},
        {name:'Christian Heigele',task:'App-Prototyp'},
        {name:'Prof. Dr. Martin Przewloka',task:'Kommunikation mit dem HLUG und Organisation'},
        {name:'Marco Schäfer',task:'App'},
        {name:'Vincent Elliott Wagner',task:'Service, App und Organistation'},
        {name:'Katharina Dort',task:'App'},
        {name:'Julian Schmitt',task:'App'},
        {name:'Florian Kolb',task:'App'}
        ];

        scope.openLink =

        scope.openWeather = function(link){
            if(link){
                $window.open(link, '_system');
            }
        };

        scope.mailFunc = function (){

          if (window.cordova && cordova.plugins.email) {

            cordova.plugins.email.open({
                    to: 'helmut.weinberger@hlug.hessen.de',
                    subject: '',
                    body: ''
                });
            } else {
                $ionicPopup.alert({
                    title: 'Info',
                    template: 'Keine Email-Unterstützung!',
                    buttons: [{
                        text: 'Schließen',
                        type: 'button-positive'
                    }]
                });
            }
        };

        return {
          openModal : function(){
                scope.error = false;
                scope.init = true;
                scope.errorOrInit = scope.error || scope.init;

                $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
                scope.modal.show();
            }
        };
  });
