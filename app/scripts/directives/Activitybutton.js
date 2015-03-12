'use strict';
angular.module('badeseenApp').directive('activityButton', [function () {
    return {
        templateUrl: 'templates/activity-button.html',
        restrict: 'E',
        scope: {
            activity: '=activity'
        },
        link: function (scope, element, attrs) {
            scope.getImageSvg = function(){
                return 'images/sport/' + scope.activity + '.svg';
            };
        }
    };
}]);