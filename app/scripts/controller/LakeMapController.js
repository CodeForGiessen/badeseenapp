'use strict';
angular.module('badeseenApp').controller('LakeMapController',
	function ($scope, LakeData) {
        $scope.center ={
            'lat': 50.583732,
            'lng': 8.678344,
            'zoom': 11
        };
        $scope.markers = {};
        $scope.defaults = {
            tileLayer: 'https://{s}.tiles.mapbox.com/v3/foobar123.j5b19dpp/{z}/{x}/{y}.png',
            tileLayerOptions: {
                attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                detectRetina: true,
                reuseTiles: true,
            }
        };
        $scope.events= {
            markers: {
                enable: ['click'],
                logic: 'emit'
            }
        };
        LakeData.getAll().then(function(data){
            var markers = {};
            data.forEach(function(item, index) {
                var marker = {
                    lat: parseFloat(item.latitude),
                    lng: parseFloat(item.longitude)
                };
                markers[index.toString()] = marker;
            });
            $scope.markers=markers;
        })
        .catch(function(){
            //handle error
        });

        $scope.$on('leafletDirectiveMarker.click',function(event,leafletEvent){
            window.location = '#/app/lake/' + leafletEvent.markerName;
        });
		/*$scope.center ={
        	'lat': 50.583732,
        	'lng': 8.678344,
        	'zoom': 11
    	};
    	$scope.markers = {};
    	$scope.defaults = {
        	tileLayer: 'http://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/pin-s-bus+f44(-73.99,40.70,13)/-73.99,40.70,13/500x300.png?access_token=pk.eyJ1IjoianNtdCIsImEiOiJaLW5zeG1RIn0.q9e1XGqv4JrtSCnz-fJBAg',
        	tileLayerOptions: {
            	attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            	detectRetina: true,
            	reuseTiles: true,
        	}
    	};
    	$scope.events= {
        	markers: {
            	enable: ['click'],
            	logic: 'emit'
        	}
    	};
    	var lakes = LakeData.getAll();

	    var markers = {};
    	lakes.forEach(function(item, index) {
           var marker = {
        	    lat: parseFloat(item.latitude),
               	lng: parseFloat(item.longitude)
           	};
           	markers[index.toString()] = marker;
       	});
       	$scope.markers=markers;
       	*/
       	// $scope.map = 'http://api.tiles.mapbox.com/v4/jsmt.lcdcnbf3/8.665,50.498,10/480x800.png?access_token=pk.eyJ1IjoianNtdCIsImEiOiJaLW5zeG1RIn0.q9e1XGqv4JrtSCnz-fJBAg'
       	

       });