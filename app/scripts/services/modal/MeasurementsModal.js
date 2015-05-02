'use strict';
angular.module('badeseenApp')
.factory('MeasurementsModal',
	function ($rootScope,MeasurementsData,$ionicModal, $ionicLoading, $timeout,$ionicScrollDelegate) {
        var scope = $rootScope.$new();
        $ionicModal.fromTemplateUrl('templates/measurementsModal.html', {
           animation: 'slide-in-up',
           scope: scope
        })
        .then(function (modal) {
            scope.modal = modal;
        });

        return {
            openModal : function(lakeId){
                scope.error = false;
                scope.init = true;
                scope.errorOrInit = scope.error || scope.init;

                var reload = function(){
                    $ionicLoading.show();
                     MeasurementsData.getById(lakeId)
                    .then(function(measurements){
                        scope.measurements = measurements;
                        scope.error = false;
                        scope.init = false;
                    })
                    .catch(function(err){
                        console.log(err);
                        scope.error = true;
                    })
                    .finally(function(){
                        scope.errorOrInit = scope.error || scope.init;
                        $ionicLoading.hide();
                        $timeout(function(){
                            ionic.trigger('resize',{
                                target:'window'
                            });
                        });
                    });
                };
                $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
                scope.modal.show();
                scope.reload = reload;
                reload();

                scope.measurementRatingToText = function(measurement){
                    if(measurement){
                        return MeasurementsData.getMeasurementRatingAsText(measurement);
                    }
                };

                scope.measurementRatingToClass = function(measurement){
                    if(measurement){
                        switch(measurement.rating){
                            case 1:
                            return 'balanced';
                            case 2:
                            return 'energized';
                            case 3:
                            return 'assertive';
                            default:
                            return '';
                        }
                    }
                };
            }
        };
	});