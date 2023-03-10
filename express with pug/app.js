const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello World!</h1>');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(400).render('404', { docTitle: '404 Page Not Found' });
});

app.listen(3000, () => {
  console.log('Server started at PORT 3000...');
});
