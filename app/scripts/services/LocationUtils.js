'use strict';
angular.module('badeseenApp').factory('LocationUtils',
	function ($cordovaGeolocation, $q) {
		var _deg2rad = function (deg) {
        	return deg * (Math.PI/180);
        };
        //Distance calculation between two geo-coordinates with Haversine Algorithm

        /**
         * [_distanceBetweeenCoords Distance calculation between two geo-coordinates with Haversine Algorithm]
         * @param {[Object]} pointa [TODO]
         * @param {[Object]} pointb [TODO]
         * @return {[Number]} [TODO]
         */
        var _distanceBetweeenCoords = function(pointa,pointb){
        	var radEarth = 6371;

        	var dLat = _deg2rad(pointa.lat-pointb.lat);
        	var dLon = _deg2rad(pointa.lng-pointb.lng);
        	var a =
        		Math.sin(dLat/2) * Math.sin(dLat/2) +
        		Math.cos(_deg2rad(pointa.lat)) * Math.cos(_deg2rad(pointb.lat)) *
        		Math.sin(dLon/2) * Math.sin(dLon/2);
        	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        	var distance = radEarth * c;
        	return Math.round(distance);
        };
        var getCurrentLocation = function(highAcc){
        	if(typeof highAcc === 'undefined'){
        		highAcc = false;
        	}
        	return $cordovaGeolocation
        	.getCurrentPosition ({
				enableHighAccuracy: highAcc
			})
        	.then(function (position) {
        		return {
        			lat: position.coords.latitude,
        			lng: position.coords.longitude
        		};
        	});
        };

		var service = {
			/**
			 * [getCurrentLocation Returns a promise which will be resolved with the current location. Gets rejected if geo sensor does not exist or is disabled.]
			 * @param {Boolean} [highAcc] [If the position should be resolved most accuracy. Default false]
			 * @return {[QPromise]} [QPromise which will be resolved with the current position or rejected if no geo sensor or network information exists.]
			 */
			getCurrentLocation: getCurrentLocation,

			/**
			 * [getDistanceToPoint Returns a promise which will be resolved with the distance to the passed position. ]
			 * @param {Object} position [e.g {
			 *                          	lat:34.0,
			 *                          	lng:12.1
			 *                          }]
			 * @param {Boolean} [highAcc] [If the position should be resolved most accuracy. Default false]
			 * @return {QPromise} [QPromise which will be resolved with the distance or rejected if the current position could not be determined or the position is not defined.]
			 */
			getDistanceToPoint: function(position, highAcc){
				var deferred = $q.defer();
				if(!position){
					deferred.reject('Pass a position');
				}else{
					var positionPromise = getCurrentLocation(highAcc)
						.then(function(currentPos){
							return _distanceBetweeenCoords(position,currentPos);
						});
					deferred.resolve(positionPromise);
				}
				return deferred.promise;
			},

			/**
         	* [_distanceBetweeenCoords Distance calculation between two geo-coordinates with Haversine Algorithm]
         	* @param {[Object]} pointa [TODO]
         	* @param {[Object]} pointb [TODO]
         	* @return {[Number]} [TODO]
         	*/
			getDistanceFromPointToPoint: _distanceBetweeenCoords
		};


		return service;
	});