'use strict';

angular.module('mainApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('welcome', {
        url: '/',
        templateUrl: '../views/welcome.html'
    }).state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
    }).state('parks', {
        url: '/parks',
        templateUrl: '../views/parks.html',
        controller: 'parksCtrl'
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

angular.module('mainApp').service('mainSrv', function () {
    this.test = "1 2 3";
});
'use strict';

angular.module('mainApp').service('parksSrv', function ($http) {

    this.getParksData = function () {
        return $http({
            method: 'get',
            url: 'http://www.utah.gov/locationaware/getNearByLocations.html?&locationType=91&type=json&listSize=10&zipCode=84020'
        });
    };
});
'use strict';

angular.module('mainApp').controller('mainCtrl', function ($scope, mainSrv, $location) {
    $scope.test = "testing testing";
    $scope.test2 = mainSrv.test;

    if ($location.path() === '/') {
        $scope.showMenu = false;
    } else {
        $scope.showMenu = true;
    }
    console.log($location.path());
});
'use strict';

angular.module('mainApp').controller('parksCtrl', function ($scope, parksSrv) {

    $scope.getParks = function () {
        parksSrv.getParksData().then(function (response) {
            console.log(response);
            $scope.parks = response.data;
        });
    };
    $scope.getParks();
});
//# sourceMappingURL=bundle.js.map
