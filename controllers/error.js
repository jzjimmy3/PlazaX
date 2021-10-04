exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: '404.error Page Not Found', path: '/404' });
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
};
