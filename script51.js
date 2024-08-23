// Object Oriented Programming
// setters and getters

// Getters and setters allow you to define Object Accessors (Computed Properties).

// We can also use in class 

// class declaration 

class Car {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of Car class");
        
    }
    get _startEngine(){
        console.log("This is start engine method using get");
        
    }
    set changeColor(color){
        console.log(this.color = color);
        
    }
    get description(){
        return `Color of Car is ${this.color} and its model is ${this.model}`
    }

}

let bmw = new Car("blue", 2023) 
bmw.startEngine() // Accsessing as function
bmw._startEngine; // Accessing as property

bmw.changeColor = "Yellow" // set as property

console.log(bmw);

console.log(bmw.description);
