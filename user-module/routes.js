module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render('index.js');
  });
};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};
