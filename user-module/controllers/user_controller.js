var User = require('../models/user');

exports.insertUser = (req, res) => {
  User.insertUser(req, res);
  res.redirect('/');
  return;
};

exports.getAllUsers = (req, res) => {
  return User.getAllUsers(req, res);
};
