// Destructuring the Array 

let hotel = {
    name: "Taj",
    location: "xyz Road, New Delhi",
    catagories: ["Chinese", "Italian", "English"]
}

// Simple Example
// without 

let items = [2, 3, 6, 7]
// let x = items[0];
// let y = items[1];
// let z = items[2];
// let p = items[3];
// console.log(x,y,z,p);

// with Destructuring

let [x, y, z, p] = items

console.log(x, y, z, p);

// exmaple 2

let [main, secondary] = hotel.catagories
console.log(main, secondary);


// Switch the catagory
// without destructuring 

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);



// with destructuring  

[secondary, main] = [main, secondary]
console.log(main, secondary);
