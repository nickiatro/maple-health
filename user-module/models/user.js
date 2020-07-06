var bodyParser = require('body-parser');
var database = require('../config/database');
var bcrypt = require('bcryptjs');

exports.insertUser = (req, res) => {
  if (req.body.password) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        insertWithHash(hash);
      });
    });
  }
  const insertWithHash = hash => {
    var sql =
      'INSERT INTO users VALUES (' +
      (req.body.username ? "'" + req.body.username + "'" : 'NULL') +
      ', ' +
      (req.body.password ? "'" + hash + "'" : 'NULL') +
      ', ' +
      (req.body.first_name ? "'" + req.body.first_name + "'" : 'NULL') +
      ', ' +
      (req.body.last_name ? "'" + req.body.last_name + "'" : 'NULL') +
      ', ' +
      (req.body.email ? "'" + req.body.email + "'" : 'NULL') +
      ', ' +
      (req.body.street ? "'" + req.body.street + "'" : 'NULL') +
      ', ' +
      (req.body.city ? "'" + req.body.city + "'" : 'NULL') +
      ', ' +
      (req.body.province ? "'" + req.body.province + "'" : 'NULL') +
      ', ' +
      (req.body.postal_code ? "'" + req.body.postal_code + "'" : 'NULL') +
      ');';
    database.connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        return;
      }
    });
  };
};

var results;
exports.getAllUsers = (req, res) => {
  var sql = 'SELECT * FROM users;';
  database.connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      results = result;
      return;
    }
  });
  return results;
};

var user;
exports.getUser = username => {
  var sql = "SELECT * FROM users WHERE username = '" + username + "';";
  database.connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      user = result[0];
      return;
    }
  });
  return user;
};

exports.updateUser = (req, res) => {
  var sql =
    "UPDATE users SET password = '" +
    req.body.password +
    "', first_name = '" +
    req.body.first_name +
    "', last_name = '" +
    req.body.last_name +
    "', email = '" +
    req.body.email +
    "', street = '" +
    req.body.street +
    "', city = '" +
    req.body.city +
    "', province = '" +
    req.body.province +
    "', postal_code = '" +
    req.body.postal_code +
    "' WHERE username = '" +
    req.body.username +
    "';";
  console.log(sql);
  database.connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      return;
    }
  });
};
