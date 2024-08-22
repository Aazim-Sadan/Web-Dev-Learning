// Local Storage 

// Store and retrieve data from database

// For now our focus is on local storage 

// Store and retrieve data from local storage 

// Is an api provided by a browser to store data inside browser 

// =============================================================

// set item 
// get item 
// update item 



// Set the items in local storage 

localStorage.setItem("passion", "programming")
localStorage.setItem("age", 24)
console.log(localStorage);


// Get the items from local storage 

console.log(localStorage.getItem('age'));


// Update 

localStorage.setItem('age', 26) // Overwrite the previous value
console.log(localStorage);

// Remove items 

localStorage.removeItem('age')
