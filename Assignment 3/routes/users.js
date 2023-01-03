const express = require('express');
const path = require('path');

const routes = express.Router();

const rootDir = require('../util/path');

routes.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = routes;
