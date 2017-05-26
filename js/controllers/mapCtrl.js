angular.module('mainApp').controller('mapCtrl', function($scope, $stateParams, $state, parksSrv) {


    $scope.populateMap = parksSrv.showMap($stateParams.id)
    let location = $scope.populateMap.location_1.coordinates
    console.log(location)
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyZ2VudDg4IiwiYSI6ImNqMzY0aHRoODAwbGszMmxpdjd5NTl6OHgifQ.zWE7w8Bs3NvC6rhFXguUTQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: location,
        zoom: 13.5
    });

    map.on('load', function() {
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
            },
        })
    })

})