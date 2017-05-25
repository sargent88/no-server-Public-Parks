angular.module('mainApp').controller('parksCtrl', function($scope, parksSrv) {

    $scope.getParks = function() {
        parksSrv.getParksData().then(function(response) {
            console.log(response)
            $scope.parks = response.data
        })
    }
    $scope.getParks();
})