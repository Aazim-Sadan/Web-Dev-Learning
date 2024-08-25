// Asynchronous Javascript

// Callback function

let todos = (callback) => {

    let request = new XMLHttpRequest();
    console.log(request);

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if (request.readyState === 4 && request.status == 200) {
            // console.log(request.responseText)
            callback(undefined, request.responseText)
        } else if (request.readyState === 4) {
            // console.log("Data couldn't be fetch");
            callback("Data couldn't be fetch", undefined)

        }

    })


    // Set up the request 
    request.open("Get", "https://jsonplaceholder.typicode.com/todos")

    // Sending the request
    request.send()

}

todos((error, Data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(Data);
        
    }
   
})