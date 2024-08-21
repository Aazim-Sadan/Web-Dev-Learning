// Array Methods 

// flat method 

// It creates s new array with the elements of the subarrays
// concatenated into it. 

let arr = [1,2,3,[4,5,[6,7,8]]]

console.log("Before flat", arr);

let result = arr.flat(2) // by default 1(depth value) value

console.log("After flat", result);



// ============================================================

// flatMap method 

// It is the combination of the Map() method 
// followed by the flat() method of the depth 1


let cart = [{
    name: "Mobile Phone",
    qty: 2,
    price: 10000,

},
{
    name: "Tab",
    qty: 1,
    price: 8000
}]

let newCart = cart.flatMap(item =>{
    if(item.name === "Mobile Phone"){
        return [item,{
            name:"Screen Protector",
            qty:1,
            price:0
        }]
    }else{
        return [item]
    }
})

console.log(newCart);
