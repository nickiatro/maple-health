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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'User Management' });
});

app.get('/register', (req, res) => {
  res.render('create_user', { title: 'Create User' });
});

app.get('/login', (req, res) => {
  res.render('user_login', { title: 'Login' });
});

app.get('/update', (req, res) => {
  res.render('update_user', { title: 'Update User Information' });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
