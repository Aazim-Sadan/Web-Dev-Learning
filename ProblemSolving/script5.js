// Objects in JavaScript 

const user = {
    name: "Aazim Sadan",
    age: 22,
    isitTotallyAwesome: true
}

for (key in user) {
    console.log(user[key])
}

// ===========================

// what's the output?

const obj = {
    a: "one",
    b: "two",
    a: "three",
}
console.log(obj); // if we have the 2 key with the same name, first key will be replaced


// ============================

// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2


let nums = {
    a: 100,
    b: 200,
    title: "My nums"
}

multiplyByTwo(nums);

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2
        }
    }
}
console.log(nums);


// ==========================================

// What's the output of th following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// ============================================

// What's is JSON.stringify and JSON.parse ?

const user2 = {
    name: "Aazim",
    age: 24
};
const strObj = JSON.stringify(user2);
console.log(JSON.parse(strObj));

// ============================================

// What's the output

const user3 = {name: "Lydia", age:24}
const admin = {admin:true, ...user3}

console.log(admin)


// =============================================

// Destructuring in object 

let user4 = {
    name: "Aazim",
    age: 24,
    fullname:{
        first: "Aazim",
        last: "Sadan"
    }
};

const name = "Coder"

const {fullname:{first}} = user4;
console.log(first);


//=========================================

const value = {number: 10};

const multiply = (x = {...value}) =>{
    console.log(x.number *= 2)
}

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40


// =========================================

function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name: "John",
        age: 50
    }

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30
}

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);


// =========================================

// how to deep copy / clone an object ?

let user5 = {
    name: "Sadan",
    age: 24
};

// const objClone = Object.assign({}, user5);
// const objClone = JSON.parse(JSON.stringify(user5));
const objClone = {...user5};
objClone.name = "Aazim"
console.log(user5, objClone);





