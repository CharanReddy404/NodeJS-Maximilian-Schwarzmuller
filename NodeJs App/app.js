require('dotenv').config();
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStrore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.1k8kbua.mongodb.net/shop?retryWrites=true&w=majority`;

const app = express();
const store = new MongoDBStrore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  User.findById('63c0b7da17a7ca2830364893')
    .then((user) => {
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: 'Charan',
          email: 'Charan@test.com',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server starting in Port ${process.env.PORT}.....`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
