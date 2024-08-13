const dbConnect = require('./mongodb');


const insertData = async () => {
    let collection = await dbConnect();
    let result = await collection.insertMany(
        [
            {   name: 'Samsung Galaxy S21',
                price: 799.99,
                category: 'Smartphones',
                brand: 'Samsung'
            }
            ,
            {   name: 'Samsung Galaxy S20',
                price: 699.99,
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