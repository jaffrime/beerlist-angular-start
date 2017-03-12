var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var request = require('request');
var mongoose = require('mongoose');

var Beer = require("./models/BeerModel"); //NOTE beneath?
mongoose.connect("mongodb://localhost/beers")

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000, function() {
  console.log("Fullstack project. Listening on 8000.")
});

// app.get('/', function(req, res, next) {
//   res.send('Testing Server')
// });

// app.get('/beers', function (req, res, next) {
//   res.json({beers: [
//     { name: '512 IPA', style: 'IPA', image_url: 'http://bit.ly/1XtmB4d', abv: 5 },
//     { name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }
//   ]});
// });

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
  var newBeer = req.body;
    newBeer.rateSum = 0;
    newBeer.rateQuant = 0;
    newBeer.rating = 0;

  Beer.create(newBeer, function(err, beer) {
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

// //TODO: needs work
// app.put('/beers/:id', function (req, res, next) {
//   Beer.findOneAndUpdate({ _id: req.param.id }, req.body, {new: true}, function(err, beer) {
//     if (err) {
//       console.error(err)
//       return next(err);
//     } else {
//       res.send(beer);
//     }
//   // console.log(req.params.id);
//   // console.log(req.body);
//   res.send(req.body);
//   });
// });
