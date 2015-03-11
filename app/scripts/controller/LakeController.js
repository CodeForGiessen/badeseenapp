'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData, WeatherData,FavData, $ionicHistory, $q, LakeUtils) {
		var id = $stateParams.id;
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

        function getRating(lake){
            var lastRating = LakeUtils.getLatestYearRating(lake);
            var stars = 0;
            var icon = 'fa-question';
            var divclass = 'button-calm';
            switch(lastRating.rating){
                case 1:
                    stars = 3;
                    icon = 'fa-smile-o';
                    divclass = 'button-balanced';
                    
                break;
                case 2:
                    stars = 2;
                    icon = 'fa-smile-o';
                    divclass = 'button-balanced';
                break;
                case 3:
                    stars = 1;
                    icon = 'fa-meh-o';                    
                    divclass = 'button-energized';
                break;
                case 4:
                    icon = 'fa-frown-o';
                    stars = 0;
                    divclass = 'button-energized';
                    break;
                case 5:
                case 6:
                    stars = 0;
                    icon = 'fa-ban';
                    divclass = 'button-assertive';
                break;
            }
            return {
                icon: icon,
                stars: stars,
                class: divclass,
            };
        }

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

            $scope.rating = LakeUtils.getLatestYearRating(lake);
            // $scope.rating = getRating(lake);

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