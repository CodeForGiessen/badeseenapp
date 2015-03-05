'use strict';
angular.module('badeseenApp', ['ionic', 'leaflet-directive'])
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
    });

    //
    // .state ('menu', {
    //     url: '/menu',
    //     abstract: true,
    //     templateUrl: 'templates/menu.html'
    // })
    // .state('menu.dash', {
    //     url: 'dash',
    //     views: {
    //         'menuContent': {
    //             templateUrl: 'templates/dashboard.html',
    //             controller: 'DashboardController as dbCtrl'
    //         }
    //     }
    // })
    // .state('menu.map', {
    //     url: 'menu.map',
    //     views: {
    //         'menuContent': {
    //             templateUrl: 'templates/lakeMap.html',
    //             controller: 'LakeMapController as lmCtrl'
    //         }
    //     }
    // })
    // .state('menu.list', {
    //     url: 'menu.list',
    //     views: {
    //         'menuContent': {
    //             templateUrl: 'templates/lakeList.html',
    //             controller: 'LakeListController as llCtrl'
    //         }
    //     }
    // });
$urlRouterProvider.otherwise('/tab/dashboard');
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
    });
});
