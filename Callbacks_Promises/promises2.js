// It is called Callback hell...
// This type of code grows horizontly, instead of virtically

const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});



// This is Promise... 

// +++++++++++ Promise is an object which represnts the eventual compilation of Async operations ++++++++++
const promise = createOrder(cart);
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// ================================================

// Promise Chaining

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

