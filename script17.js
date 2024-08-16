// Introduction to object in JavaScript

let car = {
    model: "2022",
    color: "Black",
    company: "Honda"
}
console.log(car);


// Accessing the JavaScript properties

console.log(car["color"]);
console.log(car.model);

let propertyName = "color";

console.log(car[propertyName])
console.log(car.color);  // Use direct property name


// Modify the Object property


car.color = "Blue";
console.log(car.color);



// Delete properties of object 

let obj = {
    prop1: "value1",
    prop2: "value2"
}

delete obj.prop1
// It always returns true 

console.log(obj.prop1);
