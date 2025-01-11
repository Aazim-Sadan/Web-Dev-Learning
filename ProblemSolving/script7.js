// Call, Bind and Apply in JavaScript (Explicit Binding)

const obj = { name: "Aazim" }

function sayHello(age) {
    return `${this.name} is ${age}`
}
console.log(sayHello.call(obj, 24)); // Aazim is 24
console.log(sayHello.bind(obj, 24)); // it returns a fn 


// ======================================

const age = 20

var person = {
    name: "Aazim",
    age: 24,
    getAge() {
        return this.age
    }
}
var person2 = { age: 26 }
console.log(person.getAge.call(person2));


// =======================================

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" }
];

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name)
    }
    this.print();
}
for (let i = 0; i < animals.length; i++) { // write for loop coz of Array
    printAnimals.call(animals[i], i)
}


// =======================================

// Append an array to another array

const array = ["a", "b"]
const element = [1, 2, 3]

array.push.apply(array, element)
console.log(array);


// =======================================

// find max number

const numbers = [2, 6, 7, 3, 5]
console.log(Math.max.apply(null, numbers));


// =======================================


function checkPassword(success, failed) {
    let password = prompt("Password?", "")
    if (password === "Aazim Sadan") success();
    else failed();
}

const user = {
    name: "Aazim Sadan",
    loggedIn() {
        console.log(`${this.name} logged in successfully`);
    },
    loginFailed() {
        console.log(`${this.name} failed to login`);
    }
}
// checkPassword(user.loggedIn.bind(user), user.loginFailed.bind(user));

// ===========================================

// Explicit binding with arrow function

const age2 = 7

let user2 = {
    name: "Sadan",
    age: 13,
    getAgeArrow: () => console.log(this.age),
    getAge() {
        console.log(this.age);
    }
}
const user3 = { age: 27 };
user2.getAgeArrow.call(user3);
user2.getAge.call(user3);

// ===========================================

// Pollyfill for Call method 

let car1 = {
    color: "Red",
    company: "Ferrari"
}

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "It's not Callable")
    }

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as it's not callable")
    }

    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}
const newFunc = purchaseCar.myBind(car1);
console.log(newFunc("$", 600000));
