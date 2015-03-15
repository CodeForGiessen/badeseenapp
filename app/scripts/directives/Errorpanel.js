'use strict';
angular.module('badeseenApp').directive('errorPanel', [function () {
    return {
        templateUrl: 'templates/error-panel.html',
        restrict: 'E',
        scope: {
            reload: '=',
            error: '='
        }        
    };
}]);