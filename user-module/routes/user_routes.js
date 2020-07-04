var user_controller = require('../controllers/user_controller');
module.exports = app => {
  app.post('/register', user_controller.insertUser);
};
