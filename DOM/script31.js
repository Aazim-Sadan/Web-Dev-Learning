// Regular Expression part 2 (Regex)

// Basic Form Validation using Regex 

// Implement username Validation

// username can only connsist of A-Z or a-z 
// Length os username between 6  to 12

let form = document.querySelector(".sign-up")
let user = document.querySelector("#name")
let password = document.querySelector("#password")
let userNamePattern = /[A-Za-z]{6,12}$/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = user.value;
    // "test" method return boolean value
    let result = userNamePattern.test(username)
    if (result == true) {
        console.log("Username is valid");
    } else {
        console.log("Username is invalid - Try Again");

    }

})

// Live Feedback 

user.addEventListener('keyup', (e) => {
    if (userNamePattern.test(e.target.value)) {
        console.log("Passed")
        user.setAttribute('class', 'success')
    } else {
        console.log("Fail")
        user.setAttribute('class', 'error')
    }
})