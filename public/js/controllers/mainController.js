app.controller("mainCtrl", function($scope, beerFactory) {

  $scope.beerList = beerFactory.beerList;
  $scope.addBeer = beerFactory.addBeer;


});
