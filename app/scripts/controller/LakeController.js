'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData) {
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

		LakeData.getById(id)
		.then(function(lake){
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
        	



		})
		.catch(function(){
			//TODO handle
		});
		

	});