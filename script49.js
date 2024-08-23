// Object Oriented Programming

// Prototypical inheritance on building in on objects(array)




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

console.log(instance.__proto__.isPrototypeOf(instance));

console.log(Car.prototype.isPrototypeOf(Car));


// Car.prototype is prototype of "of all object" created through
// the Car cunstructor

let arr = [4,5,6,8,2] // [] is same as new Array([])

console.log(arr.__proto__);
console.log(arr);

