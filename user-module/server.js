var express = require('express');
var app = express();
var port = 3001;
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');

require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'mySupErSecReTSECreT!!',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes.js')(app, passport);

app.listen(port);
