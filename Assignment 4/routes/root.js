const express = require('express');
const path = require('path');

const routes = express.Router();

const users = [];

routes.get('/', (req, res, next) => {
  res.status(200).render('root', { docTitle: 'Root Page' });
});

routes.post('/', (req, res, next) => {
  users.push(req.body.user);
  console.log(users);
  res.redirect('/users');
});

module.exports = { routes, users };
