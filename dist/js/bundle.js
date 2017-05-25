'use strict';

angular.module('mainApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
    }).state('parks', {
        url: '/parks',
        templateUrl: '../views/parks.html'
    }).state('map', {
        url: '/map',
        templateUrl: '../views/map.html'
    }).state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('mainApp').controller('mainCtrl', function ($scope, mainSrv) {
    $scope.test = "testing testing";
    $scope.test2 = mainSrv.test;

    $scope.getParks = function () {
        mainSrv.getParksData().then(function (response) {
            console.log(response);
            $scope.parks = response.data;
        });
    };
    $scope.getParks();
});
'use strict';

angular.module('mainApp').service('mainSrv', function ($http) {
    this.test = "1 2 3";

    this.getParksData = function () {
        return $http({
            method: 'get',
            url: 'http://www.utah.gov/locationaware/getNearByLocations.html?&locationType=91&type=json&listSize=10&zipCode=84020'
        });
    };
});
//# sourceMappingURL=bundle.js.map
