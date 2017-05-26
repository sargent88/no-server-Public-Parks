angular.module('mainApp').service('parksSrv', function($http) {

    let getParksData = () => {
        return $http({
            method: 'get',
            url: 'https://opendata.utah.gov/resource/vwt7-g473.json'
        }).then((res) => {
            this.parks = res.data;
        })
    };

    getParksData()

    this.showMap = (name) => {
        for (var i = 0; i < this.parks.length; i++) {
            if (name === this.parks[i].park) {
                return this.parks[i]
            }
        }
    }




})