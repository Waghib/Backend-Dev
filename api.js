const dbConnect = require('./mongodb');
const express = require('express');
const app = express();


app.get('/mobiles', async (req, res) => {
    const data = await dbConnect();
    const result = await data.find({}).toArray();
    res.send(result);

});

app.listen(3000)