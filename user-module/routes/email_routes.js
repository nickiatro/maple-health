var email_controller = require('../controllers/email_controller');
module.exports = app => {
  app.post('/api/send', (req, res) => {
    email_controller.sendEmail(req, res);
    res.status(200).send('OK');
  });
};
