'use strict';
angular.module('badeseenApp').directive('lakeWeather', ['WeatherData', '$window',function (WeatherData,$window) {
    return {
        templateUrl: 'templates/lake-weather.html',
        restrict: 'E',
        scope: {
            weatherdata: '=weatherdata',
            data: '@data'

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
            },scope.onResize);
            scope.$watch('weatherdata', function(value){
                if(value){
                    scope.weather = value[scope.data];
                    var iconId = scope.weather.weather[0].icon;
                    scope.weathericon = WeatherData.getWeatherIconClassById(iconId);
                }
            });
            scope.openWeather = function(){
                if(scope.weatherdata.openWeatherCityId && !scope.notClickable){
                   $window.open('http://openweathermap.org/city/' + scope.weatherdata.openWeatherCityId, '_system', 'location=yes');
                }
            };

            scope.onResize();
        }
    };
}]);