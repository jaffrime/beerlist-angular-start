app.controller("beerCtrl", function($scope, beerFactory, $stateParams) {

  $scope.beer = $stateParams.beerParam;

});
