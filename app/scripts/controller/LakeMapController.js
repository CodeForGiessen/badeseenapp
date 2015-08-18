'use strict';
angular.module('badeseenApp').controller('LakeMapController',
	function ($scope, LakeData, leafletData, $ionicModal, LakeModal, $ionicLoading,$timeout,$http) {
        $scope.lakes = [];
        $scope.markers = {};
        $scope.error = false;
        $scope.init = true;
        $scope.errorOrInit = $scope.error || $scope.init;
        var reload = function(){
            $ionicLoading.show();
            LakeData.getAll()
            .then(function(lakes){
                var markers = {};
                lakes.forEach(function(item) {
                    var marker = {
                        lat: parseFloat(item.latitude),
                        lng: parseFloat(item.longitude),
                        group: 'hesse'
                    };
                    markers[item._id] = marker;
                });
                $scope.markers=markers;
                $scope.error = false;
                $scope.init = false;
            })
            .catch(function(err){
                console.log(err);
                $scope.error = true;
            })
            .finally(function(){
                //Due to an angular bug an expression like error || init will not be evaluated a second time
                $scope.errorOrInit = $scope.error || $scope.init;
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
            'lat': 50.5264091,
            'lng': 9.0043941,
            'zoom': 8
        };

        $scope.defaults = {
            // tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayer: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            tileLayerOptions: {
                // attribution:'© <a href="#" onClick="window.open(\'http://www.openstreetmap.org/copyright\',\'_system\');return false;">OpenStreetMap</a>',
                attribution:'© <a href="#" onClick="window.open(\'http://www.openstreetmap.org/copyright\',\'_system\');return false;">OpenStreetMap</a>, © <a href="#" onClick="window.open(\'http://cartodb.com/attributions\',\'_system\');return false;">CartoDB</a>',
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
            // map.attributionControl.setPosition('topleft');
            $http.get('scripts/controller/hesse_border.geo.json').success(function(data) {
                L.geoJson(data,{ //jshint ignore:line
                    style: {
                        fillColor: '#0C63EE',
                        weight: 2,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.25
                    },
                    invert:true
                }).addTo(map);
            });

        });

        $scope.$on('leafletDirectiveMarker.click',function(event,leafletEvent){
            LakeModal.openModal(leafletEvent.modelName);
        });
    });