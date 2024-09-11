// Form events (Submit Form)

// let email = document.querySelector('#email')
// let password = document.querySelector('#password')

let form = document.querySelector('.sign-up')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Submit the form successfully");
    console.log(email.value, password.value);
    console.log(form.email.value, form.password.value);
    
})