// Array Methods

// Filter Method (Used to perform filteration method on Array)

let cars = ["Creta","Scorpio","Harrier","Fortuner","Endeavour","Curvv"]

// Now you want to filter only "Scorpio and Curvv" cars

let filteredArray = cars.filter(car =>{
    if(car == "Scorpio" || car =="Curvv" )
        return car
})


// It returns new Array
console.log(filteredArray);


// Imp Note 
// Length of new array may or may not be equal to original array 