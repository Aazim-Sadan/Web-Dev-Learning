// Modern Javascript Modules, and tooling

// Exporting and Importing ES6 Modules


// Importing module without value

// import {order, laptopPrice, quant} from './Product.js'
import * as singleVariable from './Product.js'

console.log("Importing Module");

singleVariable.order("Aazim", "mobile")

console.log("Laptop Price", singleVariable.laptopPrice);
console.log("Quantity", singleVariable.quant);
console.log(singleVariable);


