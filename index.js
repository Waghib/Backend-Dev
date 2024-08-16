const express = require('express');
require('./config');
const product = require('./product');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
  let data = new product(req.body);
  const result = await data.save();
  console.log(req.body);
  res.send(result);

});

app.listen(3000);