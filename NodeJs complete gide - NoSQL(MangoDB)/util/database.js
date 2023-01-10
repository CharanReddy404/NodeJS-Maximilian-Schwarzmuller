const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(
      `mongodb+srv://nodejs:nodejs@cluster0.1k8kbua.mongodb.net/shop?retryWrites=true&w=majority`
    )
    .then((client) => {
      console.log('DB Connected');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database Found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
