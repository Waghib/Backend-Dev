const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDb = async () => {
    const Product = mongoose.model("Product", productSchema);
    let data = new Product({
      name: "Apple",
      price: 2125,
      brand: "Apple",
      category: "mobile",
    });
    const result = await data.save();
    console.log(result);
}

const updateInDb = async () => {
    const Product = mongoose.model("Product", productSchema);
    const result = await Product.updateOne(
      { name: "Apple" },
      { $set: { price: 2000 } }
    );
    console.log(result);
}

const deleteInDb = async () => {
    const Product = mongoose.model("Product", productSchema);
    const result = await Product.deleteOne({ name: "Apple" });
    console.log(result);
}

const findInDb = async () => {
    const Product = mongoose.model("Product", productSchema);
    const result = await Product.find({ name: "Samsung Galaxy S21" });
    console.log(result);
}

// saveInDb();
// updateInDb();
// deleteInDb();
findInDb();