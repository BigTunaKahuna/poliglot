const User = require("../models/users");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

module.exports = function(passport) {
  passport.use(
    new Strategy((username, password, done) => {
      let query = { userName: username };
      User.findOne(query, (err, user) => {
        if (err) console.log(err);
        if (!user) {
          return done(null, false, { message: "No user found" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Wrong password" });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });
};
