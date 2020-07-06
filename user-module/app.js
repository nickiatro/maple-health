var express = require('express');
var path = require('path');
var user = require('./models/user');
var bodyParser = require('body-parser');
var database = require('./config/database');
var passport = require('passport');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./routes/routes')(app);
require('./routes/user_routes')(app);

database.createUserTable();

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
