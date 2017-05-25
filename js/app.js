angular.module('mainApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: '../views/welcome.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html'
            })
            .state('parks', {
                url: '/parks',
                templateUrl: '../views/parks.html',
                controller: 'parksCtrl'
            })
            .state('map', {
                url: '/map',
                templateUrl: '../views/map.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../views/contact.html'
            })
        $urlRouterProvider
            .otherwise('/')
    })