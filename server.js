//package and module requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var request = require('request'); //not actually needed
var beerRoutes = require('./routes/beerRoutes');
var userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb://localhost/beers');

//starting server
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('node_modules'));

//configure passport and session middleware
app.use(expressSession({
    secret: 'yourSecretHere',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// configure passport-local to use user model for authentication
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()):
passport.deserializeUser(User.deserializeUser());

//API routes

//This tells the server that when a request comes into '/beers' that it should use the routes in 'beerRoutes' and those are in our new beerRoutes.js file
app.use('/beers', beerRoutes);
app.use('/users', userRoutes);

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

// not needed w/ catch-all above
// error handler to catch 404 and forward to main error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

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
  console.log("Full-beer-stack project. Listening on 8000.")
});
