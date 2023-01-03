const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');

const rootDir = require('./util/path');
const rootRoute = require('./routes/root');
const userRoute = require('./routes/users');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', userRoute);
app.use(rootRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('server started at PORT 3000...');
});
