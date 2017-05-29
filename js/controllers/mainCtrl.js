angular.module('mainApp').controller('mainCtrl', function($scope, mainSrv, $stateParams, parksSrv) {

    $scope.showMenu = false;
    $scope.showNav = function() {
        $scope.showMenu = true;
    }

})