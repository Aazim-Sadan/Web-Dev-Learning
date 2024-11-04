require('dotenv').config({ path: "../.env" });
const express = require('express');
const morgan = require('morgan');
const server = express();
const path = require('path');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('Database connected');

}



//bodyParser
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

server.listen(8080, () => {
  console.log('server started');
});