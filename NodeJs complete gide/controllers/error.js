exports.error = (req, res, next) => {
  res.status(400).render('404', { docTitle: '404 Page Not Found', path: '/*' });
};
