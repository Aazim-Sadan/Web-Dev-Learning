// Promise.all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3060);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1600);
    //setTimeout(() => reject("P2 Fail"), 1606);
});

const p3 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P3 Success"), 2006);
    setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });



    //+++++++++++++++

    // Promise.allSettled
    // Promise.race 
    // Promise.any

