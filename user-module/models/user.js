var bodyParser = require('body-parser');
var database = require('../config/database');

exports.insertUser = (req, res) => {
  var sql =
    'INSERT INTO users VALUES (' +
    (req.body.username ? "'" + req.body.username + "'" : 'NULL') +
    ', ' +
    (req.body.password ? "'" + req.body.password + "'" : 'NULL') +
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
