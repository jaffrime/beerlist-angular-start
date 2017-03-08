app.factory("beerFactory", function(){

  var beerList = [
    { name: "Beer 1",
      style: "Style 1",
      abv: "ABV 1",
      image: "http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/beer.jpg"
    },
    { name: "Beer 2",
      style: "Style 2",
      abv: "ABV 2",
      image: "http://www.menshealth.com/sites/menshealth.com/files/styles/slideshow-desktop/public/images/slideshow2/beer-intro.jpg?itok=hhBQBwWj"
    },
    { name: "Beer 3",
      style: "Style 3",
      abv: "ABV 3",
      image: "http://wallpapersdsc.net/wp-content/uploads/2016/09/Beer-Widescreen.jpg"
    },
  ];

  // var beerList = [];

  var addBeer = function (newBeer){
    console.log(newBeer);

    for (i=0; i<beerList.length; i++) {
      if (beerList[i].name === newBeer.name) {
        alert("Beer already in list");
        return;
      }
    }
    // "else..."
    // NOTE: breaking angular binding
    beerList.push(angular.copy(newBeer,{}));

    // NOTE: old/normal code
    // beerList.push(newBeer);
  };

  // var addBeer = function (beer){
  //   console.log(beer);
  //
  //   var newBeer = {
  //     name: beer.name,
  //     style: beer.style,
  //     abv: beer.abv,
  //     image: beer.image
  //   };
  //
  //   beerList.push(newBeer);
  // };

  var removeBeer = function (index){
    beerList.splice(index,1);
  };

  var addRating = function (index, rating){
    alert(index, parseInt(rating));
    if (!beerList[index].ratings) {
      beerList[index].ratings = [rating];
    } else {
      beerList[index].ratings.push(rating);
    }

    // var tempSum = beerList[index]ratings.reduce(function(a, b) { return a + b; }, 0);
    var tempSum;
    // for (i=0; i<beerList[index].ratings.length, i++){
    //   tempSum += beerList[index].ratings[i];
    // }

    beerList[index].rating = tempSum / beerList[index].ratings.length;
  };

  return {
    beerList: beerList,
    addBeer: addBeer,
    removeBeer: removeBeer,
    addRating: addRating
  };
})
