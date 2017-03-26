app.controller("beerCtrl", function($scope, beerFactory, $stateParams) {

  // window.MY_BEER = $scope;
  // window.MY_PARAMS = $stateParams;

  $scope.beer = $stateParams.beerParam;

  $scope.getBeer = function (id) {
    beerFactory.getBeer(id)
      .then(function(beer){
        // console.log(beer);
        $scope.beer = beer;
      })
  };

  if (!$stateParams.beerParam) {
    // alert("Looking for beer");
    $scope.getBeer($stateParams.id);
  }

  $scope.addReview = function (id, review){
    beerFactory.addReview(id, review)
      .then(function(review){
        alert("Review uploaded.");
        console.log(review);
    }).catch(function(err){
      console.log("error", err);
    })
  }

});
