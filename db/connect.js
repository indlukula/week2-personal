/*jshint esversion: 6*/

const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let my_db;

const initDb = (callback) => {
  if (my_db) {
    console.log('Db is already initialized!');
    return callback(null, my_db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, my_db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!my_db) {
    throw Error('Db not initialized');
  }
  return my_db;
};

module.exports = {
  initDb,
  getDb,
};