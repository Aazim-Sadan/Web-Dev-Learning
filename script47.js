// Object Oriented Programming 

// Constructor function and the "new" Operator 

// We can not use "arrow" function as constructor 

// Call "constructor" function using "new" keyword 

// 1 new {object} Created empty initiallly 
// 2 "this" = {object}
// 3 object link to prototype 
// 4 function automatically return {object}

let Car = function (color, model) {
    // instance properties
    this.color = color;
    this.model = model;
}
let instanceOfCar = new Car("Yellow", 2023)
let instance = new Car("Black", 2021)
console.log(instanceOfCar, instance);
