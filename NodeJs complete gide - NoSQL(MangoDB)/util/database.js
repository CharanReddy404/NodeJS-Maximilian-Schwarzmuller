const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  mongoClient
    .connect(
      `mongodb+srv://nodejs:nodejs@cluster0.1k8kbua.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((client) => {
      console.log('DB Connected');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
