var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var fs = require('fs');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

exports.createUserTable = () => {
  sql = 'DROP TABLE IF EXISTS users';
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
  sql =
    'CREATE TABLE IF NOT EXISTS users (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL ,email VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, province VARCHAR(2) NOT NULL, postal_code VARCHAR(7) NOT NULL)';
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
  insertSampleData();
};

const insertSampleData = () => {
  var sqlString = fs.readFileSync('./public/insert.sql').toString();
  var queries = sqlString.split(';');
  var firstParts = [];
  var passwords = [];
  var secondParts = [];
  var start = 0;

  for (var i = 0; i < queries.length - 1; i++) {
    var firstPart = queries[i].substring(
      0,
      (start = queries[i].indexOf(',') + 2)
    );
    var queriesString2 = queries[i].substr(start);
    var secondPart = queriesString2.substr(queriesString2.indexOf(',') - 1);

    var password = queries[i].substring(start);
    password = password.substring(0, password.indexOf("'"));
    passwords.push(password);
    i == 0
      ? firstParts.push(firstPart)
      : firstParts.push(firstPart.substring(2));
    secondParts.push(secondPart);
  }

  var numOfQueries = firstParts.length;
  for (var j = 0; j < numOfQueries; j++) {
    insertWithHashedPassword(firstParts[j], passwords[j], secondParts[j]);
  }
};

const insertWithHashedPassword = (firstPart, password, secondPart) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  var sql = firstPart + hash + secondPart;
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
};

module.exports.connection = connection;
