// if , else , else if

let Age = 19

if (Age >= 18) {
    console.log("You can drive");

}

// if else 

let age = 12
if (age < 18) {
    console.log("You can't drive");

} else {
    console.log("You can drive")
}

// elseif

let budget = 8000
if (budget > 6000) {
    console.log("Will do dinner in 5 Star");
}
else if (budget > 4500) {
    console.log("Will do dinner in 3 Star");
}
else if (budget > 3000) {
    console.log("Will do dinner in 2 Star");
}
else {
    console.log("Will do dinner later ");
}

// After first condition true control get out of scope



// ============================================================


// Nested-if statement

let number = 34;
if (number > 23) {
    console.log("Run if first condition is true");
    if (number > 66) {
        console.log("Run if both condition is true");
        if (number > 22) {
            console.log("Run if all condition is true");
        }
    }
}

