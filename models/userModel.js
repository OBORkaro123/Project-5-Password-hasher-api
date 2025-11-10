const { MongoClient, ObjectId } = require('mongodb');
let _db;

async function connectToDatabase() {
  if (_db) return _db;
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  _db = client.db(process.env.DB_NAME);
  return _db;
}

exports.insertUser = async (user) => {
  const db = await connectToDatabase();
  return db.collection('users').insertOne(user);
};

exports.findUserById = async (id) => {
  const db = await connectToDatabase();
  return db.collection('users').findOne({ _id: new ObjectId(id) });
};

exports.connectToDatabase = connectToDatabase;
