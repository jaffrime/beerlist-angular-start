app.controller("mainCtrl", function($scope, beerFactory) {

  window.MY_SCOPE = $scope;

  $scope.beerList = beerFactory.beerList;
  $scope.addBeer = beerFactory.addBeer;
  $scope.removeBeer = beerFactory.removeBeer;
  $scope.addRating = beerFactory.addRating;
  $scope.ratings = [1,2,3,4,5];
  $scope.sortBeers = beerFactory.sortBeers;
  $scope.sortOrder = beerFactory.sortOrder;
  $scope.getBeers = beerFactory.getBeers;

  beerFactory.getBeers();

});
