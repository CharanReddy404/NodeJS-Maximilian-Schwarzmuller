const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie')?.split(';')[3]?.trim().split('=')[1];
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'isLoggedIn=true');

  User.findById('63c0b7da17a7ca2830364893')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
};
