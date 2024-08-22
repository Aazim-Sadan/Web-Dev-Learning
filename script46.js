// How to store complex data structure like array of object

// Ultimately in local storage data store in string format 


let vehicles = [
    { brand: "Toyota", model: 2017 },
    { brand: "Honda", model: 2023 }
]
console.log(vehicles);

let stringOfVehicles = JSON.stringify(vehicles)
console.log(stringOfVehicles);  // typeof "string"


localStorage.setItem("vehicles", stringOfVehicles)

console.log(localStorage);


// Get stored item again in obbject format

let storedData = localStorage.getItem('vehicles')

let objectForamt = JSON.parse(storedData)

console.log(typeof objectForamt); // typeof "object"
