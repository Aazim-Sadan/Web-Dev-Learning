// Modern Javascript Modules, and tooling

// Top level await ES2022

// Before ES2022 we can use awair only inside async function 

// But in ES2022 introduced top level "await" 

// It means now we can use "await" outside the async function 


// starting 
console.log("Start using top level await");

let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

let data = await response.json()

console.log(data);


console.log("Finishing..");


// Top level await block the execution of the next code part 



// =============================================================

// Normal async/await 

let getTodos = async ()=>{  // Now there is no blocking

    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    
    let data = await response.json()
    
    console.log(data);

}

getTodos()

console.log("Finishing......");
