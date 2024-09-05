let promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Perform Async task")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Handle Promise")
})

// ===============================


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve()

    }, 2000);
}).then(function () {
    console.log("Promise two handled")
})

// ================================


let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "aazimsadan", email: "xyzdev@gmail.com" })
    }, 3000);
})
promiseThree.then((user) => {
    console.log(user.username)
})

// =================================

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "aazim", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((users) => {
        console.log(users)
        return users.username
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))


// ============================================


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// ====================================

async function getAllUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("Error:", error);

    }
}
getAllUsers()

// ======================================


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })