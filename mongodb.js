const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'e-comm';
const client = new MongoClient(url);

async function dbConnection()
{
    let result = await client.connect();
    db = client.db(databaseName);
    return db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data);
}

// console.log(dbConnection());
// dbConnection().then((res) => {
//     console.log('Connected to database');
//     res.find().toArray().then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     });
// })


module.exports = dbConnection;