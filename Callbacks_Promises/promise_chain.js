let cart = ["Mobile, Earbuds, Tws, Charger,"]


// Producer

function createOrder(cart) {

    const pr = new Promise((resolve, reject) => {
        // createOrder 
        // validateCart
        // orderId 
        if (!validateCard(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder 
        const orderId = "12345"
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 2000);
        }

    })
    return pr

}


function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful")
    })
}

function paymentSuccesfull(paymentInfo){
    return new Promise((resolve, reject) => {
        resolve ("Your Cart has been updated")
    })
}


function validateCard(cart) {
    return true
}


createOrder(cart)
    .then((orderId) => {
        console.log(orderId);
        return orderId
    })
    .then((orderId) => {
        return proceedToPayment(orderId); // Return promise itself
    })
    .then((paymentInfo)=>{
        console.log(paymentInfo);
      return  paymentSuccesfull(paymentInfo)
    })
    .then((WalletUpdated)=>{
        console.log(WalletUpdated);
        
    })
    .catch((err) => {
        console.log(err.message);
    })
