// Break and Continue statement

// Also called jump statement

// Continue statement

// used to skip some values of loop

for(let i = 1; i<=10; i++){
if (i == 3) {
    continue; // Moves towards the next iteration
}console.log("Value of i = ", i)

}



// Break statement

// Used to terminate the loop and controll transfer outside the loop


for(let i = 1; i<=10; i++){

if (i == 4) {
    console.log("Our desired value is = ", i);
    break;
}
console.log("value of i = ", i);

}
console.log("Now I am out side of the loop scope");
