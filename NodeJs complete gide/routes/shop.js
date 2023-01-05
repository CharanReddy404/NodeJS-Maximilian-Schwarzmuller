const express = require('express');
const path = require('path');

const routes = express.Router();

const productsController = require('../controllers/products');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

// routes.get('/', (req, res, next) => {
//   //   res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   const products = adminData.products;
//   res.render('shop', { prods: products, docTitle: 'My Shop', path: '/' });
// });

routes.get('/', productsController.getProducts);

module.exports = routes;
