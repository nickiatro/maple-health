var express = require('express');
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mtlqcH3G1M8ca',
  database: 'company',
});

connection.connect();

var app = express();

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
