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

app.get('/list', async (req, res) => {
  const result = await product.find();
  res.send(result);
});

app.delete('/delete/:_id', async (req, res) => {
  const result = await product.findByIdAndDelete(req.params._id);
  res.send(result);
});

app.put('/update/:_id', async (req, res) => {
  const result = await product.findByIdAndUpdate(req.params._id, req.body);
  res.send(result);
});

app.listen(3000);