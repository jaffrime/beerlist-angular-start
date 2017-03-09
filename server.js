var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var request = require('request');
var mongoose = require('mongoose');

var Beer = require(".models/BeerModel");

mongoose.connect("mongodb://localhost/beerDB")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000, function() {
  console.log("Fullstack project. Listening on 8000.")

});
