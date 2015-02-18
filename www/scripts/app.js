// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
"use strict";
angular.module('badeseenApp', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $stateProvider
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabsView.html'
  })
  .state('tabs.dash', {
    url: '/dashboard',
    views: {
      'dash-tab': {
        templateUrl: 'templates/dashboard.html',
        //controller: 'DashboardController as dbCtrl'
      }
    }
  })
  .state('tabs.lakeMap', {
    url: '/lakeMap',
    views: {
      'map-tab': {
        templateUrl: 'templates/lakeMap.html',
        //controller: 'LakeMapController as lmCtrl'
      }
    }
  })
  .state('tabs.lakeList', {
    url: '/lakeList',
    views: {
      'list-tab': {
        templateUrl: 'templates/lakeList.html',
        //controller: 'LakeListController as llCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise("/tab/dashboard");
  $ionicConfigProvider.tabs.position('top');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
