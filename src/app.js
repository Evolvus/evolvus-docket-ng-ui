var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/successDB', (err, db) => {
   const mydb = db.db('successDB');
  if (err) {
    console.log('Failed to connect to the database');
  } else {
    console.log('connected to mongodb');
  }
mydb.collection('TestDb').insertOne({
  name:"kavya",
  completed: "true"
}, (err, result) => {
  if(err){
    return console.log('unable to create db', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});
db.close();
});
