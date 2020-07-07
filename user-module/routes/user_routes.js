var user_controller = require('../controllers/user_controller');
module.exports = (app, passport) => {
  const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  };
  app.post('/register', user_controller.insertUser);

  app.get('/update', ensureAuthenticated, (req, res) => {
    res.render('update_user', {
      title: 'Update User Information',
      result: user_controller.getAllUsers(),
    });
  });

  app.get('/update/:username', ensureAuthenticated, (req, res) => {
    res.render('update_user_form', {
      title: 'Update User Information',
      user: user_controller.getUser(req.params.username),
    });
  });

  app.post('/update/:username', user_controller.updateUser);

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/update',
      failureRedirect: '/login',
    })(req, res, next);
  });
};
