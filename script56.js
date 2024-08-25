// Asynchronous Javascript

// Async Code Example

console.log(1);
console.log(2);

// Async Code
setTimeout(() => {
    console.log("Callback function called after 3 second");

}, 3000); // After 3 sec


console.log(3);
console.log(4);



// ===================================================================


// Making HTTP request 

let request = new XMLHttpRequest();
console.log(request);

request.addEventListener('readystatechange', ()=>{
console.log(request, request.readyState);
if(request.readyState === 4){
    console.log(request.responseText)
}

})


// Set up the request 
request.open("Get", "https://jsonplaceholder.typicode.com/todos")

// Sending the request
request.send()