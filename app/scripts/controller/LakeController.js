'use strict';
angular.module('badeseenApp').controller('LakeController',
	function ($scope, $stateParams, LakeData, WeatherData,FavData, MeasurementsData, $q, LakeUtils,$window, $ionicHistory, $ionicLoading, MessagesData, MessagesModal, MeasurementsModal, $timeout) {
		var id = $stateParams.id;

        $scope.error = false;
        $scope.init = true;
        // back directive does not work every time
        $scope.goBack = $ionicHistory.goBack;
        $scope.lake= {};
        


        var reload = function(){
            $ionicLoading.show();
            
            $scope.isFav = FavData.isFav(id);
            $q.all([
                LakeData.getById(id),
                WeatherData.getById(id),
                MessagesData.getById(id),
                MeasurementsData.getById(id)
                ])
            .then(function(res){
                var lake = res[0];
                var weatherdata = res[1];
                var messages = res[2];
                var measurements = res[3];
                $scope.lake = lake;   
                $scope.rating = LakeUtils.getLatestYearRating(lake);
                $scope.weatherdata = weatherdata;
                $scope.messages = messages;
                $scope.measurements = measurements;
                $scope.latestMeasurement = MeasurementsData.getLatestMeasurement(measurements);
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
                });
            });
        };

        $scope.reload = reload;

        $scope.$on('$ionicView.enter', reload);

        $scope.toogleFav = function(){
            $scope.isFav = FavData.toogleFav(id);
        };

        $scope.openLinkExtern = function(link){
            if(link){
                link = link.toLowerCase();
                if(link.indexOf('http://') !== 0 &&  link.indexOf('https://') !== 0){
                    link = 'http://' + link;
                }
                $window.open(link,'_system');
            }
        };

        $scope.openMessageModal = function(){
            MessagesModal.openModal($scope.lake._id);
        };

        $scope.openMeasurementsModal = function(){
            MeasurementsModal.openModal($scope.lake._id);
        };

        $scope.measurementRatingToText = function(measurement){
            if(measurement){
                return MeasurementsData.getMeasurementRatingAsText(measurement);
            }
        };

        $scope.measurementRatingToClass = function(measurement){
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

        $scope.isActivity = function(activity){
            if($scope.lake && $scope.lake.extracurricularActivity){
                return $scope.lake.extracurricularActivity.indexOf(activity) !== -1;
            }else{
                return false;
            }
        };
	});