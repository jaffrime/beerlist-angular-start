app.factory("beerFactory", function($http){

  var beerFactory = {};

  beerFactory.getBeers = function () {
    return $http.get('/beers')
      .then(function(response) {
        //data manipulation
        return response.data;
      }, function (err) {
        console.error(err)
      });
  };

  beerFactory.addBeer = function (beer){
    // console.log(beer);
    var newBeer = {
      name: beer.name,
      style: beer.style,
      abv: beer.abv,
      image: beer.image,
      rateSum: 0,
      rateQuant: 0,
      rating: 0
    };
    return $http.post('/beers', newBeer)
      .then(function(response) {
        console.log("Beer added!");
        return response.data;
      }, function (err) {
        console.error(err)
      });
  };

  beerFactory.removeBeer = function (beerID){
    // console.log(beerID);
    return $http.delete('/beers/' + beerID)
      .then(function(response) {
        console.log("Beer removed.");
        return response.data;
      }, function (err) {
        console.error(err)
      });
  };

  beerFactory.addRating = function (id, rating){
    console.log(id + " " + rating);
    var tempIndex;
    for (i=0; i<beerList.length; i++){
      if (name === beerList[i].name){
        tempIndex = i;
      }
    }
    beerList[tempIndex].rateSum += rating;
    beerList[tempIndex].rateQuant += 1;
    var tempAvg = beerList[tempIndex].rateSum / beerList[tempIndex].rateQuant;
    beerList[tempIndex].rating = tempAvg.toFixed(1);
    console.log(beerList[tempIndex].rating);
  };

  beerFactory.editBeer = function () {
    // $scope.tempBeer =
  };

  beerFactory.updateBeer = function () {

  };

  // beerFactory.sortOrder = {
  //   is: false
  // };
  //
  // beerFactory.sortBeers = function (){
  //   console.log(sortOrder.is);
  //   sortOrder.is = !sortOrder.is;
  //   console.log(sortOrder.is);
  // }


  return beerFactory;
})
