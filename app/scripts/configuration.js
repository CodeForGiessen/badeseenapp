'use strict';

 angular.module('config', [])

.constant('ENV', {name:'development',apiEndpoint:'http://badeseen.andinfinity.de/api/v1',requestTimeout:20000,cachesMaxAge:{lakes:604800000,weather:7200000,messages:7200000}})

;