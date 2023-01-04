const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');

const app = express();

const rootRoute = require('./routes/root');
const userRoute = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute);
app.use(rootRoute.routes);

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: '404 Page Not Found' });
});

app.listen(3000, () => {
  console.log('server started on POST 3000');
});
