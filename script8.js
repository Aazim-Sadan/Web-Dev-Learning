// Control flow
// For Loop

// Run the specific task 5 times

// for(let i=1; i<=10; i++){
//     console.log("Run the task", i);
    
// }


// Usecase of For loop

let mobile = ["Samsung", "iPhone", "Oneplus", "Vivo", "Redmi", "Nothing"]

for(let i = 0; i<mobile.length; i++){
    console.log(mobile[i]);
    
}

// iteration and value of i
// 0 , 1


// ==============

// Try by myself

let n = 5;
for(let i = 1; i<=10; ++i){
    console.log(n*i)
}

// While Loop

for(let i = 1; i<=5; i++){  // Infinite loop in case we miss conditional statement
    console.log("For Loop", i)
}

// while()

let j = 1
while (j<=5) { // Get error >-- Conditional statement is mandatory
    console.log("While Loop", j);
    j++
    
}

let friends = ["Aazim", "Faizan", "Faisal", "Golden"]

let k = 0;
while (k<friends.length) {
    console.log("Testing", friends[k])
    k++ // WIthout this statement we will get infinite loop
}

