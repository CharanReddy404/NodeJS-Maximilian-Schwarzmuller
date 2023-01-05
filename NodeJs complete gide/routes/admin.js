const express = require('express');
const path = require('path');

const productsController = require('../controllers/products');

const routes = express.Router();

const products = [];

// const rootDir = require('../util/path');

// routes.get('/add-product', (req, res, next) => {
//   //   res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
//   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

//   res.render('add-product', {
//     docTitle: 'Add Products',
//     path: '/admin/add-product',
//   });
// });

routes.get('/add-product', productsController.getAddProduct);

routes.post('/add-product', productsController.postAddProduct);

module.exports = routes;
