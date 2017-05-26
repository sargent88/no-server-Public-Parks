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
        url: '/map/:id',
        templateUrl: '../views/map.html',
        controller: 'mapCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('mainApp').controller('mainCtrl', function ($scope, mainSrv, $stateParams, $location, parksSrv) {
    $scope.test = "testing testing";
    $scope.test2 = mainSrv.test;

    if ($location.path() === '/') {
        $scope.showMenu = false;
    } else {
        $scope.showMenu = true;
    }
    // console.log($location.path())

});
'use strict';

angular.module('mainApp').controller('mapCtrl', function ($scope, $stateParams, $state, parksSrv) {

    $scope.populateMap = parksSrv.showMap($stateParams.id);
    var location = $scope.populateMap.location_1.coordinates;
    console.log(location);
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyZ2VudDg4IiwiYSI6ImNqMzY0aHRoODAwbGszMmxpdjd5NTl6OHgifQ.zWE7w8Bs3NvC6rhFXguUTQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: location,
        zoom: 13.5
    });

    map.on('load', function () {
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": location
                        }
                    }]
                }
            },

            "layout": {
                "icon-image": "marker-15",
                "icon-size": 3
            }
        });
    });
});
'use strict';

angular.module('mainApp').controller('parksCtrl', function ($scope, parksSrv, $stateParams) {

    $scope.parks = parksSrv.parks;
});
'use strict';

angular.module('mainApp').service('mainSrv', function () {
    this.test = "1 2 3";
});
"use strict";
'use strict';

angular.module('mainApp').service('parksSrv', function ($http) {
    var _this = this;

    var getParksData = function getParksData() {
        return $http({
            method: 'get',
            url: 'https://opendata.utah.gov/resource/vwt7-g473.json'
        }).then(function (res) {
            _this.parks = res.data;
        });
    };

    getParksData();

    this.showMap = function (name) {
        for (var i = 0; i < _this.parks.length; i++) {
            if (name === _this.parks[i].park) {
                return _this.parks[i];
            }
        }
    };
});
//# sourceMappingURL=bundle.js.map
