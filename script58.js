// Asynchronous Javascript

// fetch API 

fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
    console.log("promise resolved", response);
    return response.json() // returning promise 
}).then((data) => {
    console.log(data);
}).catch((erorr)=>{
    console.log(erorr)
})