var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/UserModel');

// for /users routes...
router.post('/register', function(req, res, next) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, user) {
    if (err) {
      console.log('Error registering!', err);
      return next(err);
    }
    req.login(user, function(err) {
      if (err) {
        return next(err);
      }
      res.send(req.user);
    });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send(req.user.username)
});

router.get('/logout', function(req, res) {
  req.logout();
  res.send('Logged Out');
});

// Export...
module.exports = router;
