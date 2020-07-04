module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', { title: 'User Management' });
  });

  app.get('/register', (req, res) => {
    res.render('create_user', { title: 'User Registration' });
  });

  app.get('/login', (req, res) => {
    res.render('user_login', { title: 'Login' });
  });

  app.get('/update', (req, res) => {
    res.render('update_user', { title: 'Update User Information' });
  });
};
