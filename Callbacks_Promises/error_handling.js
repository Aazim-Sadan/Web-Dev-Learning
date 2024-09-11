// handling error using try-catch 

let API_URL = "https://api.github.com/users/Aazim-Sadan"

async function handlePromise() {
try {
    let data = await fetch(API_URL)
    let jsonValue = await data.json()
    console.log(jsonValue);

} catch (error) {
    console.log(error);
    
}
    
}

handlePromise()