// Digital Clock 

let hourHand = document.querySelector('.hour')
let minHand = document.querySelector('.minute')
let secHand = document.querySelector('.second')


let ticking = function(){
    let currentDate = new Date()

    let getHour = currentDate.getHours()

    let getMinute = currentDate.getMinutes()

    let getSecond = currentDate.getSeconds()

    hourHand.textContent = getHour

    minHand.textContent = getMinute

    secHand.textContent = getSecond
}


setInterval(ticking,1000); // 1000 = 1sec