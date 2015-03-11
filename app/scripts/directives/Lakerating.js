'use strict';
angular.module('badeseenApp').directive('lakeRating', [function () {
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
            rating: '=rating'
        },
        link: function (scope, element, attrs) {
            element.removeAttr('lake-rating');
            scope.$watch('rating', function(value){
                if(value){
                    var newRating = getRating(value);
                    angular.extend(scope,newRating);
                }
            });
        }
    };
}]);