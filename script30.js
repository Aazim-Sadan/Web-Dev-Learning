// Regular Expression (Regex)

// It is a pattern of Characters used to do pattern matching
// Or we can say for "Data Validation"

// Implimentation of password validation 

// Length At least = 8
// At least Contain one Uooer case letter 
// At least Contain one Lower case letter 
// At least Contain one digit 0 tp 9






let form = document.querySelector('.sign-up')
let email = document.querySelector('#email')
let password = document.querySelector('#password')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let passwordValue = password.value
    console.log(passwordValue);
    
})