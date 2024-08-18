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




// =================================================================


// Updating and changing content 


// innerText
// Ignore spaces
// Retrieve and set content in Plain text

let heading = document.querySelector('.heading')
// console.log(heading.innerText);
// heading.innerText += "<P>We are Coders</P>"  // Update
// console.log(heading.innerHTML);







// innerHTML
// it does not ignore spaces 
// Retrieve and set content in HTML format
heading.innerHTML += "<h3>We are Coders</h3>"
// console.log(heading.innerHTML);





// ====================================================================

// Getting and setting attributes of elements 

let JavaScript = document.querySelector('a')
console.log(JavaScript.getAttribute('href')); // get gunctions for read


// set the Attribue 

JavaScript.setAttribute('href', "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction")
console.log(JavaScript.getAttribute('href'));




// ======================================================================


// Adding the Style 

let headStyle = document.querySelector('h1')
headStyle.style.color = "red"
headStyle.style.backgroundColor = "yellow"




// =========================================================================

// Add, remove and replace class of elements 

let addClass = document.querySelector('h2')

// Adding new class 

addClass.classList.add('newClass')


// Remove the class 

addClass.classList.remove('newClass')


// Replace the class 

addClass.classList.replace("coding", "newClass")
