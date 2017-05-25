angular.module('mainApp').service('parksSrv', function($http) {

    this.getParksData = function() {
        return $http({
            method: 'get',
            url: 'http://www.utah.gov/locationaware/getNearByLocations.html?&locationType=91&type=json&listSize=10&zipCode=84020'
        })
    }
})