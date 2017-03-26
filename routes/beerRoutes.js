var express = require('express');
var router = express.Router();
var Beer = require('../models/BeerModel');

//the beer routes go here
router.get('/', function (req, res, next) {
  Beer.find(function(err, beers){
    if (err) {
      console.error(error)
      return next(error);
    } else {
      res.send(beers);
    }
  })
})

router.get('/:id', function (req, res, next) {
  Beer.findById(req.params.id, function(err, beer){
    if (err) {
      console.error(error)
      return next(error);
    } else {
      res.send(beer);
    }
  })
})

// original post request - not functioning correctly
// app.post('/beers', function (req, res, next) {
//   var n = req.body;
//   var newBeer = new Beer(
//     {name: n.name},
//     {style: n.style},
//     {abv: n.abv},
//     {image: n.image},
//     {rateSum: 0},
//     {rateQuant: 0},
//     {rating: 0}
//   );
//   console.log(newBeer);
//   newBeer.save(function(error, result){
//     if (error) {
//       return console.error(error);
//     }
//     console.log(result);
//   });
//   res.send(n);
// })

router.post('/', function(req, res, next) {
  // var newBeer = req.body;
  //   newBeer.rateSum = 0;
  //   newBeer.rateQuant = 0;
  //   newBeer.rating = 0;

  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});


// cleaned up w/ help from lesson
router.post('/:id/reviews', function(req, res, next) {

  Beer.findById(req.params.id, function(err, foundBeer) { //if using "find", need to work w/ array (foundBeer[x]...)
    if (err) {
      console.error(err)
      return next(err);
    } else if (!foundBeer) {
        return res.send("Error! No beer found with that ID");
    } else {
        foundBeer.reviews.push(req.body);
        foundBeer.save(function(err, updatedBeer) {
          if (err) {
            return next(err);
          } else {
            res.send(updatedBeer);
          }
        });
      }
  });
});


router.delete('/:id', function (req, res, next) {
  Beer.remove({_id:req.params.id}, function (err) {
    // if (err) throw err;
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send("Beer deleted... :-(")
    }

  })
})


// router.delete('/:id/reviews', function (req, res, next) {
//   Beer.findById(req.params.id, )
// });



router.put('/:id', function (req, res, next) {
  // console.log(req.body);
  Beer.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send(beer);
    }
  });
});



module.exports = router;
