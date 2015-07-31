'use strict';
angular.module('badeseenApp', ['ionic','config', 'leaflet-directive', 'ngCordova'])
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider){
    $stateProvider
    .state('intro', {
        url: '/intro',
        controller: 'IntroController as iCtrl'
    })
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
                controller: 'DashboardController as dbCtrl'
            }
        }
    })
    .state('tabs.lakeMap', {
        url: '/lakeMap',
        views: {
            'map-tab': {
                templateUrl: 'templates/lakeMap.html',
                controller: 'LakeMapController as lmCtrl'
            }
        }
    })
    .state('tabs.lakeList', {
        url: '/lakeList',
        views: {
            'list-tab': {
                templateUrl: 'templates/lakeList.html',
                controller: 'LakeListController as llCtrl'
            }
        }
    })
    // .state('tabs.about', {
    //     url: '/about',
    //     views: {
    //         'about-tab': {
    //             templateUrl: 'templates/about.html',
    //             controller: 'AboutController as aCtrl'
    //         }
    //     }
    // })
    // .state('lakes', {
    //     url: '/lakes',
    //     abstract: true,
    //     templateUrl: 'templates/lakemenu.html'
    // })
    .state('lake', {
        url: '/lakes/:id',
        templateUrl: 'templates/lake.html',
        controller: 'LakeController as lCtrl'
    });
    $urlRouterProvider.otherwise('/intro');
    $ionicConfigProvider.tabs.position('top');
    })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
            if(window.navigator && window.navigator.splashscreen) {
                window.navigator.splashscreen.hide();
            }
        });

    });
