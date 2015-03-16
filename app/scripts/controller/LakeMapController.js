'use strict';
angular.module('badeseenApp').controller('LakeMapController',
	function ($scope, LakeData, leafletData, $ionicModal, LakeModal, $ionicLoading,$timeout) {
        $scope.lakes = [];
        $scope.markers = {};
        $scope.error = false;
        $scope.init = true;
        var reload = function(){
            $ionicLoading.show();
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
                $scope.error = false;                            
                //Due to an angular bug an expression like error || init will not be evaluated a second time
                $timeout(function(){
                    $scope.init = false;
                });
            })
            .catch(function(err){
                console.log(err);
                $scope.error = true;
            })
            .finally(function(){
                $ionicLoading.hide();
                $timeout(function(){
                    ionic.trigger('resize',{
                        target:'window'
                    });
                    leafletData.getMap()
                    .then(function(map){
                        map.invalidateSize(false);
                    });
                });
                
            });
        };
        $scope.reload = reload;

        $scope.$on('$ionicView.enter', reload);    


        $scope.center ={
            'lat': 50.583732,
            'lng': 8.678344,
            'zoom': 11
        };
        
        $scope.defaults = {
            tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerOptions: {
                attribution:'© <a href="#" onClick="window.open(\'http://www.openstreetmap.org/copyright\',\'_system\');return false;">OpenStreetMap</a>',
                detectRetina: true,
                reuseTiles: true
            },
            zoomControl:false
        };
        $scope.events= {
            markers: {
                enable: ['click'],
                logic: 'emit'
            }
        };
        leafletData.getMap()
        .then(function(map){
            map.attributionControl.setPrefix('<a href="#" onClick="window.open(\'http://leafletjs.com\',\'_system\');return false;">Leaflet</a>');
        });
        
        $scope.$on('leafletDirectiveMarker.click',function(event,leafletEvent){
            LakeModal.openModal(leafletEvent.markerName);
        });
    });