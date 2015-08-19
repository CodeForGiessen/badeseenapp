'use strict';

 angular.module('config', [])

.constant('ENV', {name:'development',apiEndpoint:'http://smeeter.net:7650/api/v1',requestTimeout:60000,cachesMaxAge:{lakes:345600000,weather:7200000,messages:7200000,measurements:604800000}})

;