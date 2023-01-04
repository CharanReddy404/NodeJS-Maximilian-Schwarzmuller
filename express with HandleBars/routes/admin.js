const express = require('express');
const path = require('path');

const routes = express.Router();

const products = [];

const rootDir = require('../util/path');

routes.get('/add-product', (req, res, next) => {
  //   res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  res.render('add-product', {
    docTitle: 'Add Products',
    path: '/admin/add-product',
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
});

routes.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = { routes, products };
