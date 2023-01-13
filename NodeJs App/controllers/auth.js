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
  req.session.isLoggedIn = true;
  res.redirect('/');
};
