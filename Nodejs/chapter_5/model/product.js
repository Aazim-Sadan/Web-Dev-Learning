const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  
  id:Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);