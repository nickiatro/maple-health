const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const database = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(function(username, password, done) {
      database.connection.query(
        "SELECT * FROM users WHERE username ='" + username + "'",
        function(err, user) {
          if (err) throw err;
          if (user.length == 0) {
            return done(null, false, { message: 'No user found!' });
          }
          bcrypt.compare(password, user[0].password, function(err, isMatch) {
            if (err) throw err;
            if (isMatch) {
              return done(null, user[0]);
            } else {
              return done(null, false, { message: 'Incorrect password!' });
            }
          });
        }
      );
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function(username, done) {
    database.connection.query(
      "SELECT * FROM users WHERE username = '" + username + "'",
      function(err, user) {
        done(err, user[0]);
      }
    );
  });
};
