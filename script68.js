// Modern Javascript Modules, and tooling

// Module pattern

// IIFE 

let resultIIFE = (function(){
    let orders = [];
    let addToCart = function(product, quantity){
        console.log(`${product} ordered ${quantity}`);
        orders.push({product,quantity})
    }
    return{
        orders,
        addToCart
    }
})()

resultIIFE.addToCart("Biryani", 9);
resultIIFE.addToCart("Pizza", 6);
console.log(resultIIFE.orders);

