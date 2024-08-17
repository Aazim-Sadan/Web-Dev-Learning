// Math Object build in object of JavaScript

// console.log(Math);
console.log(Math);

let num = 5.8;
console.log(Math.round(num));  // round to nearest integer

console.log(Math.floor(num)); // round to down
console.log(Math.ceil(num)); // round to up
console.log("remove decimal part", Math.trunc(num)); // it removes decimal part

let random = Math.random()
console.log(Math.round(random * 100));



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

