'use strict';
//http://stackoverflow.com/a/15253892
angular.module('badeseenApp').filter('capitalize', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    };
});