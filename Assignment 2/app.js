const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('users');
  res.send('<h1>Hello From Users "/users"</h1>');
});

app.use('/', (req, res, next) => {
  console.log('root');
  res.send('<h1>Hello From Root "/"</h1>');
});

//Task 1
// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Third Middleware');
//   res.send('<h1>Hello World from Third Middleware</h1>');
// });

app.listen(3000, () => {
  console.log('server started at PORT 3000...');
});
