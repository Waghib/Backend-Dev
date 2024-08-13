const dbConnect = require('./mongodb');

const main = async () => {
    let collection = await dbConnect();
    let data = await collection.find({}).toArray();
    console.log(data);
}

main()
