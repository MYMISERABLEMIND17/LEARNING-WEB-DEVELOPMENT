// const { MongoClient } = require('mongodb');

// const url =  "mongodb+srv://mymiserablemind17_db_user:AXAB174rSG1NFrOG@firstdb.ctflhdz.mongodb.net/";
// const client = new MongoClient(url);

// const dbName = 'myProject';

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://mymiserablemind17_db_user:AXAB174rSG1NFrOG@firstdb.ctflhdz.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'firstdb';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');



  // const data  = {
  //     name:"toffrfeefrfr",
  //     lastname:"sigerfrfg",
  //     age:"12",
  //     country:"India",
  // }
  // const insertResult = await collection.insertMany([data]);
  // console.log('Inserted documents =>', insertResult);



  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());