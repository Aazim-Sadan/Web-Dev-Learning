require('dotenv').config({ path: "../.env" });
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');


// DB Connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('Database connected');

}



//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, () => {
  console.log('server started');
});