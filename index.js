const dbConnect = require('./mongodb');

const main = async () => {
    let collection = await dbConnect();
    let data = await collection.find({}).toArray();
    console.log(data);
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


main()
