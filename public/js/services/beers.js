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
    console.log(beer);
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

  beerFactory.removeBeer = function (beerName){
    // console.log(beerName);
    // TODO: remove this and set _id as the function parameter
    for (i=0;i<beerList.length;i++){
      if (beerList[i].name === beerName){
        var tempID = beerList[i]["_id"];
      }
    }
    return $http.delete('/beers/'+tempID)
      .then(function(response) {
        console.log("Beer removed.");
        return response.data;
        getBeers();
      }, function (err) {
        console.error(err)
      });
  };

  // beerFactory.addRating = function (name, rating){
  //   console.log(name + " " + rating);
  //   var tempIndex;
  //   for (i=0; i<beerList.length; i++){
  //     if (name === beerList[i].name){
  //       tempIndex = i;
  //     }
  //   }
  //   beerList[tempIndex].rateSum += rating;
  //   beerList[tempIndex].rateQuant += 1;
  //   var tempAvg = beerList[tempIndex].rateSum / beerList[tempIndex].rateQuant;
  //   beerList[tempIndex].rating = tempAvg.toFixed(1);
  //   console.log(beerList[tempIndex].rating);
  // };
  //
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
