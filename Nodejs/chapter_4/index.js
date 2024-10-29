const fs = require('fs');
const express = require('express');
const { log } = require('console');

const data = JSON.parse(fs.readFileSync("../chapter_3/data.json", "utf-8"));
const products = data.products;

const server = express();

//bodyParser
server.use(express.json());

server.use(express.static('public'));




// Create POST products (adding data)
server.post("/products", (req, res) => {
    console.log(req.body);
    products.push(req.body)
    res.json(req.body);
});



// Read GET all products 
server.get('/products', (req, res) => {
    res.json(products)
})



// Read GET individual products 
server.get('/products/:id', (req, res) => {
    const id = +req.params.id
    const product = products.find(p => p.id === id)
    res.json(product);
})


// Update PUT /products/:id (this overwrite previous data)
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.json("Value updated");
});


// Update PATCH /products/:id (without overriding existing data)
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.json("Value updated");
});


// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1)
    res.status(201).json();
});



server.listen(8080, () => {
    console.log("Server is running...");
})