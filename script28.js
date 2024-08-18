// Bubbling and Delegation


// Creating

let button = document.querySelector('.clickMe')
// console.log(eventElement);



button.addEventListener('click', function () {
    let li = document.createElement('li')
    li.textContent = "Fixing Bugs"
    ul.append(li)

})



// Removing

// let elements = document.querySelectorAll('li')


// elements.forEach(function (element) {

//     element.addEventListener('click', e => {
//         console.log(e.target); // target indicates clicked elements
//         e.target.style.textDecoration = "line-through"
//         console.log("Inside LI");

//         e.target.remove()
//     })


// })


let ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {

    // console.log("Inside UL");
    if(e.target.nodeName == "LI"){
        e.target.remove()
    }
})
