// New

function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);

}

let chai = new createUser("tea", 25)
let tea = createUser("chai", 200)

chai.printMe()




// ============================================

let heros = ["thor", "captainAmerica"]

let heroPower = {
    thor: "hammer",
    captainAmerica: "shield",

    getThorPower: function () {
        console.log(`Thor power is ${this.thor}`);

    }
}

Object.prototype.aazim = function () {
    console.log("Aazim is present in all object");

}

Array.prototype.itsAazim = function () {
    console.log("Aazim says hello");

}
heroPower.aazim()
heroPower.aazim()
heros.itsAazim()


// ====================================================


// Inheritance 


let User ={
    name: "username",
    email: "abc@google.com"
}

let Teacher = {
    makeVideo: true
}

let TeachingSupport = {
    isAvailable: false
}

let TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}

Teacher.__proto__ = User

// modern syntax

console.log(Object.setPrototypeOf(TeachingSupport, Teacher))


// =====================


let anotherUsername = "AazimSadan      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Ture length is ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"Aazim".trueLength()