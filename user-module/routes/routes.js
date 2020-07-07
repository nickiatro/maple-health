module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render('index', { title: 'User Management' });
  });

  app.get('/register', (req, res) => {
    res.render('create_user', { title: 'User Registration' });
  });

  app.get('/login', (req, res) => {
    res.render('user_login', { title: 'User Login' });
  });

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
    })(req, res, next);
  });
};
