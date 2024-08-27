// Exporting to script66.js

console.log("Exporting Module");


export let order = function(buyer, item){
    console.log(`${buyer} buy Samsung ${item}`);
    
}

// Multiple Values 

let laptopPrice = 50000;
let quantity = 20;

export {laptopPrice, quantity as quant}