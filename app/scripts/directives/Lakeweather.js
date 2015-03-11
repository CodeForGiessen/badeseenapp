'use strict';
angular.module('badeseenApp').directive('lakeWeather', ['WeatherData',function (WeatherData) {
    return {
        templateUrl: 'templates/lake-weather.html',
        restrict: 'E',
        scope: {
            weather: '=weather'
        },
        link: function (scope, element, attrs) {
            scope.$watch('weather', function(value){
                if(value){
                    var iconId = value.weather[0].icon;
                    scope.weathericon = WeatherData.getWeatherIconClassById(iconId);
                }
            });
        }
    };
}]);