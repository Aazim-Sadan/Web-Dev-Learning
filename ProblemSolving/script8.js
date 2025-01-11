// // Callbacks, Promises, Async/Await 

console.log("start");

function importentAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)
        }, 1000);
    })
}
function likeVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video}`)
        }, 1000);
    })
}
function shareTheVideo(link) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${link}`)
        }, 1000);
    })
}

// // promise chaining
importentAction("My Channel")
    .then((res) => {
        console.log(res);
        return likeVideo("First Video");
    }).then((res) => {
        console.log(res);
        return shareTheVideo("First Video");
    }).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
console.log("End");


// // ==========================================

// // Promises 

console.log("Start")

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true
        if (result) resolve("Subscribe to my channel");
        else reject(new Error("Why aren't you subscribed to my channel"));
    }, 1000);
});
sub
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

console.log("End");


// ============================================

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("Success")
        } else {
            reject("error")
        }
    });
}

let promise = job(true);

promise
    .then(function (data) {
        console.log(data);

        return job(true)
    })
    .then(function (data) {
        if (data !== "victory") {
            throw "Defeat";
        }
        return job(data)
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job(false);
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
        return "Error cought"
    })
    .then(function (error) {
        console.log(error);
        return new Error("test")
    })
    .then(function (data) {
        console.log("Success:", data.message);
    })
    .catch(function (data) {
        console.log("Error:", data.message);
    })

// =======================================

const firstPromise = new Promise((resolve, reject) => {
    resolve("First!")
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise)
})

secondPromise
    .then((res)=>{
        return res
    })
    .then((res) => console.log(res));