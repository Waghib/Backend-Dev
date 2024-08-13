const dbConnect = require('./mongodb');

const updateData = async () => {

    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'Samsung Galaxy S21'},
        {
            $set: {
                price: 900
            }
        }
    )
    console.log(result);

};

updateData();