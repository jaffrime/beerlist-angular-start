var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var plm = require('passport-local-mongoose');


var UserSchema = new Schema({
  username: String,
  password: String
});

var User = mongoose.model("User", UserSchema);
UserSchema.plugin(plm);

module.exports = User;
