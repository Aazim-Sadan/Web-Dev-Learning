// getting Html elements using querySelector/All

// querySelectors returns "first elements" that match css selector 

// to get all matched elements we use queryselectorAll


let resultedElements = document.querySelector("h1")
console.log(resultedElements);


// Access elements with class 


let resultedElement1 = document.querySelector(".coding")
console.log(resultedElement1);


// Access elements with id

let resultedElement2 = document.querySelectorAll("#dev")
console.log(resultedElement2);


// ===============================================================

// Other ways to get Html elements 

let querySelectorElements = document.querySelectorAll('h2')
console.log(querySelectorElements);


// get elements by tagName 

let tagNameElements = document.getElementsByTagName('p')
console.log(tagNameElements);


// get elements by Id 


let elementById = document.getElementById('dev')
console.log(elementById);
