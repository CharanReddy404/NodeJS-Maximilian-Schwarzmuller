const express = require('express');
const path = require('path');

const rootRoute = require('./root');

const routes = express.Router();

routes.get('/users', (req, res, next) => {
  res
    .status(200)
    .render('users', { docTitle: 'User Page', users: rootRoute.users });
});

module.exports = routes;
