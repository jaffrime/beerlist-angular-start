app.controller("mainCtrl", function($scope, beerFactory) {

  window.MY_SCOPE = $scope;

  // $scope.beerList = []; // don't need?
  $scope.addBeer = function (newBeer) {
    beerFactory.addBeer(newBeer).then(function(beer){
      $scope.getBeers();
    })
  };

  $scope.removeBeer = function(beerName) {
    beerFactory.removeBeer(beerName).then(function(beer){
      $scope.getBeers();
    });
  };
  // $scope.addRating = beerFactory.addRating;
  // $scope.ratings = [1,2,3,4,5];
  // $scope.sortBeers = beerFactory.sortBeers;
  // $scope.sortOrder = beerFactory.sortOrder;

  $scope.getBeers = function() {
    beerFactory.getBeers().then(function (data){
      $scope.beerList = data;
    });
  };

  $scope.getBeers();

});
