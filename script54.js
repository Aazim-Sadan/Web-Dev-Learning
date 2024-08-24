// Object Oriented Programming 

// Class inheritance



// class declaration (sub class)

// Parent class

class Car {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method");
        
    }
}

// Child class 

class Bike extends Car {
    // Add some new properties and "method" as well
    constructor(color,model,engineCapacity){
        super(color,model)
        this.engineCapacity = engineCapacity
    }

    bikeMethod(){
        console.log("This is method of Bike class");
        
    }

}

let newBike = new Bike("Black", 2018, "200CC")
let newBike2 = new Bike("Green",2022, "900CC")
console.log(newBike, newBike2);





let bmw = new Car("blue", 2023) 
console.log(bmw);
