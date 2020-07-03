var express = require('express');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./routes/routes')(app);
require('./routes/user_routes')(app);

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mtlqcH3G1M8ca',
  database: 'company',
});

connection.connect(err => {
  if (err) throw err;
  var sql = 'DROP TABLE IF EXISTS users';
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
  sql =
    'CREATE TABLE users (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL ,email VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, province VARCHAR(255) NOT NULL, postal_code VARCHAR(7) NOT NULL)';
  connection.query(sql, (err, result) => {
    if (err) throw err;
  });
  connection.end();
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
