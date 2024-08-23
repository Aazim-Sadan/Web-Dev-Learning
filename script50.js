// Object Oriented Programming 

// ES6 Classes(They still implement prototypal inheritance 
// behind the scene)


// class declaration

class Car {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of Car class");
        
    }
}
Car.prototype.breakMethod = function(){
    console.log("Break method of car");
    
}

let bmw = new Car("blue", 2023)  // This is instance class Car
console.log(bmw.__proto__);
bmw.startEngine()

// Importent Points 
// Classes are not hoisted
// Classes are also first class citizens(Pass as an argument or return)
// Classes are executed in strict mode
