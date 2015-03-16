'use strict';
angular.module('badeseenApp').directive('lakeDistance', ['WeatherData', '$window',function (WeatherData,$window) {
    return {
        templateUrl: 'templates/lake-distance.html',
        restrict: 'E',
        scope: {
            distance: '=distance',
        },
        link: function (scope, element, attrs) {
            if (!scope.data){
               scope.data = 'current';
            }
            if(attrs.notClickable === ''){
                scope.notClickable = true;
            }

            scope.onResize = function(){
                var panelsize = element.width();
                element.find('.top').css({
                    'top': panelsize * 0.05 + 'px',
                    'font-size':  panelsize * 0.55 + 'px',
                    'line-height':  panelsize * 0.55 + 'px'
                });
                element.find('.bottom').css({
                    'bottom': panelsize * 0.05 + 'px',
                    'font-size':  panelsize * 0.25 + 'px',
                    'line-height':  panelsize * 0.25 + 'px'
                });
            };

            angular.element($window).bind('resize', function() {
                scope.onResize();
            });

            scope.$watch(function(){
                return element.width();
            }, scope.onResize);

            scope.$watch('distance', function(value){
                if(value){
                    scope.hasDistance = true;
                } else {
                    scope.hasDistance = false;
                }
            });

            scope.onResize();
        }
    };
}]);
