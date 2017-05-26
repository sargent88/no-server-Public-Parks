angular.module('mainApp').controller('parksCtrl', function($scope, parksSrv, $stateParams) {

    $scope.parks = parksSrv.parks


})