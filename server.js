//package and module requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require("./models/BeerModel"); //NOTE beneath?
var request = require('request'); //not actually needed

//starting server
var app = express();
mongoose.connect("mongodb://localhost/beers")

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(express.static('node_modules'));


//API routes
app.get('/beers', function (req, res, next) {
  Beer.find(function(err, beers){
    if (err) {
      console.error(error)
      return next(error);
    } else {
      res.send(beers);
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

app.post('/beers', function(req, res, next) {
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

app.delete('/beers/:id', function (req, res, next) {
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


app.put('/beers/:id', function (req, res, next) {
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


// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


//start the server
app.listen(8000, function() {
  console.log("Fullstack project. Listening on 8000.")
});
