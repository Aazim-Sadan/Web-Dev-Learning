// forEach method of array

// Its another type of loop which we use to traverse
// over the array 

let friends = ["Aazim", "Faizan", "Faisal", "Golden"]


// using for loop

for(i = 0; i<friends.length; i++){
    console.log(friends[i]);
    
}

console.log("==================");



// Using forEach mothod

friends.forEach(function(element){  // It will print same as "for loop"
    console.log(element);
    
})