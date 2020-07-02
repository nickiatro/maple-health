var express = require('express');
var app = express();
var port = 3001;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'mySupErSecReTSECreT!!' }));
app.use(passport.initialize());
app.use(passport.session());
