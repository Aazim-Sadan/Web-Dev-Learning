// setTimeout and setInterval

// setTimeout -> Run Function "once" after "interval" of time

// setInterval -> Run function repeadly, Starting after the
// interval of time, then repeat.......


// setTimeout

// setTimeout(func|code, delay, arg1, arg2, arg3,.....

let hello = function(name){
    console.log(`Welcone to my Office ${name}`);
    
}

setTimeout(hello,2000, "Sana")


// setInterval(func|code, delay, arg1, arg2, arg3,.....

// setInterval(hello,2000, "Marie")


// ================================================================


// Hoisting
// variable "declaration" are "hoiseted" towards "top" of thier scope

// function Declaration 

test()
function test(){
    console.log("hello world");
    
}


// Not Function expression or arrow function 

// test1()
// let test1 = function(){ // this function cannot declared before initialization
//     console.log("Hello Programmers");
    
// }

