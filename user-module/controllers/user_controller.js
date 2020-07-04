var User = require('../models/user');

exports.insertUser = (req, res) => {
  User.insertUser(req, res);
  res.redirect('/register');
  return;
};
