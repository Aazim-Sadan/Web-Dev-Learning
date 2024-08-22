// Prototypes 

// Each object created by "constructor" function have an access 
// to all "methods" present inside that "constructor" prototype



let Car = function (color, model) {
    // instance properties
    this.color = color;
    this.model = model;

}
// Method
Car.prototype.startEngine = function(){
    console.log("This is start engine method");
    
}
// We can also set "properties" in prototype
Car.prototype.company = "Honda"

console.log(Car.prototype);


let instanceOfCar = new Car("Yellow", 2023)
let instance = new Car("Black", 2021)
// console.log(instanceOfCar, instance);
instanceOfCar.startEngine()

console.log(instance.__proto__);
