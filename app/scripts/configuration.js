'use strict';

 angular.module('config', [])

.constant('ENV', {name:'development',apiEndpoint:'http://badeseen.andinfinity.de/api/v1',requestTimeout:60000,cachesMaxAge:{lakes:60000,weather:60000,messages:60000,measurements:60000}})

;