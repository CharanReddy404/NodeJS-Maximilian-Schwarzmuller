const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello World!</h1>');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.error);

// app.use((req, res, next) => {
//   // res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
//   res.status(400).render('404', { docTitle: '404 Page Not Found' });
// });

app.listen(3000, () => {
  console.log('Server started at PORT 3000...');
});
