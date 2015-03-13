'use strict';
angular.module('badeseenApp').directive('lakeRating', ['$window','RatingModal', 'LakeUtils',function ($window,RatingModal, LakeUtils) {
    function getRating(rating){
        var stars = 0;
        var icon = 'fa-question';
        var buttonclass = 'button-calm';
        switch(rating.rating){
            case 1:
            stars = 3;
            icon = 'fa-smile-o';
            buttonclass = 'button-balanced';

            break;
            case 2:
            stars = 2;
            icon = 'fa-smile-o';
            buttonclass = 'button-balanced';
            break;
            case 3:
            stars = 1;
            icon = 'fa-meh-o';                    
            buttonclass = 'button-energized';
            break;
            case 4:
            icon = 'fa-frown-o';
            stars = 0;
            buttonclass = 'button-energized';
            break;
            case 5:
            case 6:
            stars = 0;
            icon = 'fa-ban';
            buttonclass = 'button-assertive';
            break;
        }
        return {
            icon: icon,
            stars: stars,
            buttonclass: buttonclass,
        };
    }
    return {
        templateUrl: 'templates/lake-rating.html',
        restrict: 'E',
        scope: {
            year: '=year',
            lake: '=lake'
        },
        link: function (scope, element, attrs) {
            if(attrs.notClickable === ''){
                scope.notClickable = true;
            }

            scope.onResize = function(){
                var panelsize = element.width();
                element.find('.indicator').css({
                    'top': panelsize * 0.05 + 'px',
                    'font-size':  panelsize * 0.65 + 'px',
                    'line-height':  panelsize * 0.65 + 'px'
                });
                element.find('.star').css({
                    'bottom': panelsize * 0.05 + 'px',
                    'font-size':  panelsize * 0.25 + 'px',
                    'line-height':  panelsize * 0.25 + 'px'
                });
            };
            angular.element($window).bind('resize', function() {
                scope.onResize();
            });
          

            var changed = function(){
                if(scope.lake){
                    var rating;
                    if(!scope.year){
                        rating = LakeUtils.getLatestYearRating(scope.lake);
                    }else{
                        rating = LakeUtils.getRatingByYear(scope.lake,scope.year);
                    }
                    var newRating = getRating(rating);
                    angular.extend(scope,newRating);
                }
            };

            scope.$watch('lake',changed);
            scope.$watch('year', changed);

            scope.openModal = function(){
                if(scope.lake && !scope.notClickable){
                    RatingModal.openModal(scope.lake._id);
                }
            };


            scope.onResize();
        }
    };
}]);