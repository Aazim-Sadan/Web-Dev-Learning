// Promise Polyfill implementation



function PromisePolyfill(executer) {
    let onResolve,
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val) {
        isFulfilled = true,
            value = val;
            if (typeof onResolve === "function") {
                onResolve(val);
                isCalledcalled = true
            }
    }


    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onResolve === "function") {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        };
        return this;
    };

    this.catch = function (callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }
    try {
        executer(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
});

examplePromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.error(err));
