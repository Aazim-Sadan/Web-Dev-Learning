// "this" keyword in JavaScript (Implicit Binding)

let user = {
    name: "Aazim",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name);
        nestedArrow();
    }
}
user.getDetails();

// ================================

class user2 {
    constructor(n) {
        this.name = n
    }
    getName() {
        console.log(this.name);

    }
}
const User = new user2("Sadan")
User.getName()

// =================================

// Ques: 1

const user3 = {
    firstName: "Moazzam",
    getFirstName() {
        const firstName = "Aazim";
        return this.firstName
    }
}
console.log(user3.getFirstName());


// ===================================

// Ques: 2
// What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    }
}
let user4 = makeUser();
console.log(user4.ref().name);


// ====================================

const user5 = {
    name: "Aazim Sadan",
    logMessage() {
        console.log("Let's do some coding", this.name);
    }
}

setTimeout(function () {
    user5.logMessage();
}, 1000)


// ====================================

const user6 = {
    name: "Faizan",
    greet() {
        return `Hello, ${this.name}`;
    },
    farewell: () => {
        return `Goodbye, ${this.name}`;
    }
}
console.log(user6.greet());
console.log(user6.farewell()); // Undefined


// ====================================

// Create an object calculator

let calculator = {
    read(a, b) {
        this.a = a,
            this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};
calculator.read(4, 2);
console.log(calculator.sum());
console.log(calculator.mul());

// =====================================

var length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method() { // arguments = [callback, 2, 3]
        arguments[0]();
    }
}
object.method(callback, 2, 3) // 3 length

// ======================================


const calc = {
    total: 0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    substract(a){
        this.total -= a;
        return this;
    }
}
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
