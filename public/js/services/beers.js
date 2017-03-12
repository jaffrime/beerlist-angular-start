app.factory("beerFactory", function($http){

  // var beerList = [
  //   { name: "Beer 1",
  //     style: "Style 1",
  //     abv: "ABV 1",
  //     image: "http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/beer.jpg",
  //     rateSum: 15,
  //     rateQuant: 5,
  //     rating: 3
  //   },
  //   { name: "Beer 2",
  //     style: "Style 2",
  //     abv: "ABV 2",
  //     image: "http://www.menshealth.com/sites/menshealth.com/files/styles/slideshow-desktop/public/images/slideshow2/beer-intro.jpg?itok=hhBQBwWj",
  //     rateSum: 12,
  //     rateQuant: 3,
  //     rating: 4
  //   },
  //   { name: "Beer 3",
  //     style: "Style 3",
  //     abv: "ABV 3",
  //     image: "http://wallpapersdsc.net/wp-content/uploads/2016/09/Beer-Widescreen.jpg",
  //     rateSum: 0,
  //     rateQuant: 0,
  //     rating: 0
  //   },
  // ];

  var beerList = [];

  // var beerFactory = [{beerList: []}];

  // NOTE: previous method of adding beer
  // beerFactory.addBeer = function (newBeer){
  //   console.log(newBeer);
  //
  //   for (i=0; i<beerList.length; i++) {
  //     if (beerList[i].name === newBeer.name) {
  //       alert("Beer already in list");
  //       return;
  //     }
  //   }
  //   // "else..."
  //   // NOTE: breaking angular binding
  //   // beerList.push(angular.copy(newBeer,{}));
  //
  //   // NOTE: old/normal code
  //   // beerList.push(newBeer);
  // };

  var addBeer = function (beer){
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

    beerList.push(newBeer);
  };

  var removeBeer = function (index){
    beerList.splice(index,1);
  };

  // old method w/ index
  // var addRating = function (index, rating){
  //   console.log(index);
    // console.log(index + " " + rating);
    // beerList[index].rateSum += rating;
    // beerList[index].rateQuant += 1;
    // var tempAvg = beerList[index].rateSum / beerList[index].rateQuant;
    // beerList[index].rating = tempAvg.toFixed(1);
    // console.log(beerList[index].rating);
  // };

  var addRating = function (name, rating){
    console.log(name + " " + rating);
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


  var sortOrder = {
    is: false
  };

  var sortBeers = function (){
    console.log(sortOrder.is);
    sortOrder.is = !sortOrder.is;
    console.log(sortOrder.is);
  }

  var getBeers = function () {
    return $http.get('/beers')
      .then(function(response) {
        angular.copy(response.data, beerList);
      }, function (err) {
        console.error(err)
      });
  };

  // var addBeers = function () {
  //   return $http.post('/beers')
  //     .then(function(response) {
  //       angular.copy(response.data, beerList);
  //     }, function (err) {
  //       console.error(err)
  //     });
  // };


  return {
    beerList: beerList,
    addBeer: addBeer,
    removeBeer: removeBeer,
    addRating: addRating,
    sortBeers: sortBeers,
    sortOrder: sortOrder,
    getBeers: getBeers
  };
})
