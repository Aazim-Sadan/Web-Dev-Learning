// async function always return a promise 
// await can only be used inside an async function 


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 5000);

})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 10000);

})



// function getData(){

//     // JS ingine will not wait for promise to be resolved
//     p.then((res)=> console.log(res))
//     console.log("This will print first");

// }
// getData()




async function handlePromise() {

    // JS ingine will waiting for promise to be resolved
    let val = await p1;
    console.log("It will wait for promise resolved");
    console.log(val);


    let val2 = await p2
    console.log("It will wait for promise resolved");
    console.log(val2);


}
console.log("CODE");

handlePromise()


// =====================================================


let API_URL = "https://api.github.com/users/Aazim-Sadan"

async function handleApi() {

    let data = await fetch(API_URL)

    let jsonValue = await data.json()

    console.log(jsonValue);
    




    //  fetch() => Response.json() => jsonValue
}

handleApi()

