// Asynchronous Javascript

// async await 

let getTodos = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // custom error 
    if (response.status !== 200) {
        console.log("Custom: Error in fetching the code");

    }
    let data = await response.json()
    return data


}

getTodos().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error.message)
});



// ======================================================================

// Async Await without return statement 

// Let suppose we want to get more then one data


let getTodo = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await response.json()
    let response2 = await fetch("https://jsonplaceholder.typicode.com/todos")
    let date2 = await response2.json()

console.log(data, date2);



}

// We don't need chain anything as previously
getTodo()