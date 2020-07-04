var user_controller = require('../controllers/user_controller');
module.exports = app => {
  app.post('/users/add', user_controller.insertUser);
};
