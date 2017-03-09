var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: String,
  style: String,
  abv: Number,
  image: String,
  rateSum: Number,
  rateQuant: Number,
  rating: Number
});

var Beer = mongoose.model("BeerModel", beerSchema);
module.exports = Beer;
