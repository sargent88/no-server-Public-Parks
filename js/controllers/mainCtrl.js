angular.module('mainApp').controller('mainCtrl', function($scope, mainSrv) {
    $scope.test = "testing testing"
    $scope.test2 = mainSrv.test

    $scope.getParks = function() {
        mainSrv.getParksData().then(function(response) {
            console.log(response)
            $scope.parks = response.data
        })
    }
    $scope.getParks();
})