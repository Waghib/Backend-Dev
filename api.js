const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

// middleware to parse the request body
app.use(express.json());

app.get('/', async (req, res) => {
    const data = await dbConnect();
    const result = await data.find({}).toArray();
    res.send(result);

});

app.post('/', async (req, res) => {
    console.log(req.body);
    const data = await dbConnect();
    const result = await data.insertOne(req.body);
    res.send(result);
});

app.put('/', async (req, res) => {
    const data = await dbConnect();
    const result = await
    data.updateOne(
        { name: req.body.name },
        { $set: req.body }
    );
    res.send(result);
});

app.listen(3000)