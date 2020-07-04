var bodyParser = require('body-parser');
var database = require('../config/database');

exports.insertUser = (req, res) => {
  var sql =
    'INSERT INTO users VALUES (' +
    "'" +
    req.body.username +
    "'" +
    ', ' +
    "'" +
    req.body.password +
    "'" +
    ', ' +
    "'" +
    req.body.first_name +
    "'" +
    ', ' +
    "'" +
    req.body.last_name +
    "'" +
    ', ' +
    "'" +
    req.body.email +
    "'" +
    ', ' +
    "'" +
    req.body.street +
    "'" +
    ', ' +
    "'" +
    req.body.city +
    "'" +
    ', ' +
    "'" +
    req.body.province +
    "'" +
    ', ' +
    "'" +
    req.body.postal_code +
    "'" +
    ');';
  database.connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      return;
    }
  });
};
