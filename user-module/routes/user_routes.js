var user_controller = require('../controllers/user_controller');
module.exports = app => {
  app.post('/register', user_controller.insertUser);

  app.get('/update', (req, res) => {
    res.render('update_user', {
      title: 'Update User Information',
      result: user_controller.getAllUsers(),
    });
  });

  app.get('/update/:username', (req, res) => {
    res.render('update_user_form', {
      title: 'Update User Information',
      user: user_controller.getUser(req.params.username),
    });
  });
};
