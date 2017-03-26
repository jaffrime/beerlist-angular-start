app.controller("mainCtrl", function($scope, beerFactory) {

  window.MY_SCOPE = $scope;

  // $scope.beerList = []; // don't need?

  $scope.getBeers = function() {
    beerFactory.getBeers()
      .then(function (data){
        $scope.beerList = data;
      })
      .catch (function(error) {
        console.log('error', error);
      });
  };

  $scope.addBeer = function (newBeer) {
    beerFactory.addBeer(newBeer).then(function(beer){
      $scope.getBeers();

      /* Another way of writing it...
      var promise = beerFactory.addBeer(newBeer);
      promise.then(function(beer){
        $scope.getBeers();
      }) */
    })
    .catch(errorHandler)
  };

  // from Ronen, on error handling
  function errorHandler(error) {
    alert(error);
  }

  $scope.removeBeer = function(id) {
    beerFactory.removeBeer(id).then(function(beer){
      $scope.getBeers();
    });
  };

  $scope.editBeer = function (id) {
    // alert("Edit Button Working");
    console.log(id);

    for (i=0;i<$scope.beerList.length;i++){
      $scope.beerList[i].edit = false;
      if (id === $scope.beerList[i]._id){
        $scope.tempBeer = $scope.beerList[i];
        $scope.beerList[i].edit = true;
      }
    }

  };

  $scope.cancelEdit = function () {
    for (i=0;i<$scope.beerList.length;i++){
      $scope.beerList[i].edit = false;
    }
  };

  $scope.updateBeer = function (beerEdit) {
    beerFactory.updateBeer(beerEdit).then(function(beer){
      $scope.getBeers();
    });
  };

  // $scope.addRating = beerFactory.addRating;
  // $scope.ratings = [1,2,3,4,5];
  // $scope.sortBeers = beerFactory.sortBeers;
  // $scope.sortOrder = beerFactory.sortOrder;

  $scope.addReview = function () {

  };

  $scope.getBeers();

});
