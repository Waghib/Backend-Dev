const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'e-comm';
const client = new MongoClient(url);

async function dbConnection() {
    let result = await client.connect();
    let db = client.db(databaseName);
    return db.collection('products'); // Return the 'products' collection
}

module.exports = dbConnection;