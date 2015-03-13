'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData, WeatherData,FavData, $ionicHistory, $q, LakeUtils,leafletData, $ionicSlideBoxDelegate,$window) {
		var id = $stateParams.id;
        var initCenter = {
            'lat': 50.583732,
            'lng': 8.678344,
            'zoom': 11
        };
        $scope.center = initCenter;
        $scope.lake= {};
		$scope.defaults = {
            tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerOptions: {
             	attribution:'© <a href="#" onClick="window.open(\'http://www.openstreetmap.org/copyright\',\'_blank\');return false;">OpenStreetMap</a>',
                	detectRetina: true,
                	reuseTiles: false,
            	},
            dragging:false,
            doubleClickZoom: false,
            scrollWheelZoom: false,
            tap: false,
            touchZoom: false,
            zoomControl: false,
        };
		$scope.markers = {};
        

        $scope.getWeatherIconUrl = function(iconId){
            return 'http://openweathermap.org/img/w/' + iconId + '.png';
        };

        $scope.$on('$ionicView.enter', function(){

            $scope.isFav = FavData.isFav(id);
            $q.all([
                LakeData.getById(id),
                WeatherData.getById(id)
                ])
            .then(function(res){
                var lake = res[0];
                var weatherdata = res[1];
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

                $scope.weatherdata = weatherdata;
            })
            .catch(function(err){
                //TODO handle
                console.log(err);
            });            
        });

        $scope.$on('$ionicView.afterEnter', function(){
            $ionicSlideBoxDelegate.update();
            ionic.trigger('resize',{
                target:'window'
            });
            // $ionicSlideBoxDelegate.update();
//             leafletData.getMap()
//             .then(function(map){
//                     map.setView([0, 0], 0, {
//     reset: true
// });
//                     console.log('reset');

//             });


        });
         // angular.element($window).bind('resize',function(){
         //        leafletData.getMap()
         //    .then(function(map){
         //        map.invalidateSize(false);
         //    console.log('updated');
         //    });
         //    });
    
        // $scope.$on('$ionicView.leave', function(){
        //     leafletData.getMap()
        //     .then(function(map){
        //         map.remove();
        //     });

        // });


        $scope.toogleFav = function(){
            $scope.isFav = FavData.toogleFav(id);
        };
	});