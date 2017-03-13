app.controller("mainCtrl", function($scope, beerFactory) {

  window.MY_SCOPE = $scope;

  // $scope.beerList = []; // don't need?
  $scope.addBeer = function (newBeer) {
    beerFactory.addBeer(newBeer).then(function(beer){
      $scope.beerList.push(beer); // or getBeers();
    })
  };

  $scope.removeBeer = beerFactory.removeBeer;

  // $scope.addRating = beerFactory.addRating;
  // $scope.ratings = [1,2,3,4,5];
  // $scope.sortBeers = beerFactory.sortBeers;
  // $scope.sortOrder = beerFactory.sortOrder;

  
  beerFactory.getBeers().then(function (data){
    $scope.beerList = data;
  });

});
