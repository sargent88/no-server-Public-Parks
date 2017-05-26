angular.module('mainApp').controller('mainCtrl', function($scope, mainSrv, $stateParams, $location, parksSrv) {
    $scope.test = "testing testing"
    $scope.test2 = mainSrv.test

    if ($location.path() === '/') {
        $scope.showMenu = false;
    } else {
        $scope.showMenu = true;
    }
    // console.log($location.path())


})