angular.module('mainApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html'
            })
            .state('parks', {
                url: '/parks',
                templateUrl: '../views/parks.html'
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