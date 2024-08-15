const dbConnect = require('./mongodb');


const insertData = async () => {
    let collection = await dbConnect();
    let result = await collection.insertMany(
        [
            {   name: 'Samsung 14',
                price: 7149.99,
                category: 'Smartphones',
                brand: 'Samsung'
            }
            ,
            {   name: 'Samsung Galaxy 2141',
                price: 61429.99,
                category: 'Smartphones',
                brand: 'Samsung'
            }
        ]

    );
    console.log(result);
    if (result.acknowledged) {
        console.log(`${result.insertedCount} data inserted` );
    }
}

insertData().catch((err) => {
    console.log(err);
});