const dbConnect = require('./mongodb');


const deleteData = async () => {

    let data = await dbConnect();
    let result = await data.deleteOne(
        {name: 'Samsung Galaxy S21'}
    )
    console.log(result);

};

deleteData();