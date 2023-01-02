const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from NodeJs');

// const two = () => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, 2000);
//   });
//   return promise;
// };

// const one = () => {
//   console.log('hello');
//   two();
//   console.log('hello after sometime');
// };

// one();

// const sleep = async (time) => {
//   return await new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, time * 1000);
//   });
// };

// const sayHello = async () => {
//   console.log('Start');
//   await sleep(4);
//   console.log('Hello there');
// };

// sayHello();
