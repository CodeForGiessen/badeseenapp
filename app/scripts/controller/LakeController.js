'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData, WeatherData,FavData, $ionicHistory, $q) {
        console.log($ionicHistory.viewHistory());
		var id = $stateParams.id;
        console.log('state:' + id);
		$scope.lake = {};
		$scope.center ={
			'lat': 50.583732,
            'lng': 8.678344,
            'zoom': 11
		};
		$scope.defaults = {
            tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerOptions: {
             	attribution:'© <a href="#" onClick="window.open(\'http://www.openstreetmap.org/copyright\',\'_blank\');return false;">OpenStreetMap</a>',
                	detectRetina: true,
                	reuseTiles: true,
            	},
            dragging:false,
            doubleClickZoom: false,
            scrollWheelZoom: false,
            tap: false,
            touchZoom: false,
            zoomControl: false,
        };
		$scope.markers = {};
        $scope.isFav = FavData.isFav(id);

        $q.all([
            LakeData.getById(id),
            WeatherData.getById(id)
            ])
        .then(function(res){
            var lake = res[0];
            var weatherdata = res[1];
            console.log(res);
            var lat = parseFloat(lake.latitude);
            var lng = parseFloat(lake.longitude);

            $scope.lake = lake;
            $scope.center ={
                'lat': lat,
                'lng': lng,
                'zoom': 15
            };
            $scope.markers = {
                'marker': {
                    lat: lat,
                    lng: lng
                }
            };
            $scope.weatherdata = weatherdata;
        })
        .catch(function(err){
            //TODO handle
            console.log(err);
        });

        $scope.getWeatherIconUrl = function(iconId){
            return 'http://openweathermap.org/img/w/' + iconId + '.png';
        };

        $scope.toogleFav = function(){
            $scope.isFav = FavData.toogleFav(id);
            console.log($scope.isFav);
        };
	});