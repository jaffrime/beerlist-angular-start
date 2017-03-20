var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  name: String,
  text: String
});

var beerSchema = new Schema({
  name: String,
  style: String,
  abv: Number,
  image: String,
  rateSum: Number,
  rateQuant: Number,
  rating: Number,
  reviews: [reviewSchema]
});

var Beer = mongoose.model("beer", beerSchema);
module.exports = Beer;
