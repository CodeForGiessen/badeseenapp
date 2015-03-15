'use strict';
angular.module('badeseenApp').factory('MeasurementsData',['$q', 'ENV', '$http', 'KeyCache',
	function ($q,ENV, $http,KeyCache) {
		var measurementsPrefix = 'measurementsCache.';
		var maxAge = ENV.cachesMaxAge.measurements;
		var lakesUrl = ENV.apiEndpoint + '/lakes';
		var timeout = ENV.requestTimeout;


		var buildRebuildFunc = function(lakeid){
			return function(){
				return $http.get(lakesUrl + '/' + lakeid + '/measurements',{
					timeout: timeout
				})
				.then(function(response){
					if(response.data.measurements){
						return response.data.measurements;
					}else{
						return undefined;
					}
				});
			};
		};


		var getById = function (id) {
			var option = {
				key: measurementsPrefix + id,
				rebuild: buildRebuildFunc(id),
				maxAge: maxAge
			};

		 	return KeyCache.get(option);
		};

		

		var service = {
			/**
			 * [getById Returns an Array of measurements for a lake]
			 * @param {[String]} id [LakeId]
			 * @return {[QPromise]} [QPromise. Gets resolved with an Array of all measurements for this lake lake or undefined if no lake with this id exists. Gets rejected if cache is outdated and an error occured e.g. networkconnection does not exist.]
			 */
			getById: getById,

			/**
			 * [getLatestMeasurement Returns the latest measurement or undefined when input array is empty]
			 * @param {[Array]} measurements [Meaurements array]
			 * @return {[Object]} [Measurement object]
			 */
			getLatestMeasurement: function(measurements){
				measurements.sort(function(a,b){
					return a.date - b.date;
				});
				if(measurements.length){
					return measurements[0];
				}else{
					return undefined;
				}
			},
			sortMeasurements: function(measurements){
				measurements.sort(function(a,b){
					return a.date - b.date;
				});
				return measurements;
			},
			/**
			 * [getMeasurementRatingAsText Returns the measurement rating as text]
			 * @param {[Object]} measurement [measurement]
			 * @return {[String]} [Measurement as text]
			 */
			getMeasurementRatingAsText: function(measurement){
				switch(measurement.rating){
					case 1:
					return 'Keine Beanstandung';
					case 2:
					return 'Vom Baden wird abgeraten';
					case 3: 
					return 'Badesee gesperrt';
					default:
					return 'Probe unbewertet';
				}
			}
		};
		return service;
	}]);