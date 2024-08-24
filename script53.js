// Object Oriented Programming 

// Static methods ( method which is not present on constructor "prototype")
// property but "constructor" itself


/// class declaration 

class Car {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of Car class");
        
    }
}

// static method (Can never inheritaed to all object)
Car.breakMethod = function(){
    console.log("This is break method of car");
    
}

let bmw = new Car("blue", 2023) 
bmw.startEngine()