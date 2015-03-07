'use strict';
angular.module('badeseenApp').controller('LakeMapController',
	function ($scope, LakeData, leafletData, $ionicModal, LakeModal) {
        $scope.center ={
            'lat': 50.583732,
            'lng': 8.678344,
            'zoom': 11
        };
        $scope.markers = {};
        $scope.defaults = {
            tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerOptions: {
                attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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

        //fix leaflet grey tiles bug
        $scope.$on('$ionicView.enter', function(){
            leafletData.getMap()
            .then(function(map){
                map.invalidateSize(false);
            });
        });

        LakeData.getAll()
        .then(function(lakes){
            var markers = {};
            lakes.forEach(function(item) {
                var marker = {
                    lat: parseFloat(item.latitude),
                    lng: parseFloat(item.longitude)
                };
                markers[item._id] = marker;
            });
            $scope.markers=markers;
        })
        .catch(function(err){
            //TODO Handle
        });
        $scope.$on('leafletDirectiveMarker.click',function(event,leafletEvent){
            // window.location = '#/app/lake/' + leafletEvent.markerName;
            LakeModal.openModal(leafletEvent.markerName);
            


        });
        
    });