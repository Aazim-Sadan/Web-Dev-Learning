// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync('../chapter_3/data.json', 'utf-8'));
// const products = data.products;
const mongoose = require("mongoose");
const model = require('../model/product')
const Product = model.Product;



//Create
exports.createProduct = async (req, res) => {

    const product = new Product(req.body);
    // product.title = "IPhone";
    // product.price = 999;
    // product.rating = 4.5;
    await product.save()
        .then(res.json(res.body));
}


//Read
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products);
};


exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const _id = new mongoose.Types.ObjectId(id);
    const product = await Product.findById(_id);
   
    res.json(product);
};


//Put method
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err)
    }

};


//Patch method
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err)
    }
};

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err)
    }
};