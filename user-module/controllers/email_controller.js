var Email = require('../models/email');

exports.sendEmail = (req, res) => {
  Email.sendEmail(req, res);
  return;
};
