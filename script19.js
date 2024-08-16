// this keywords 

// Tn each methods we have an access of special keywords called 
// "this"

// "this" keywords represent the object. "Calling" the "method"
// in which "this is "present"

let person = {
firstname: "Harry",
lastname: "Brook",
city: "Delhi",
birthyear: "1993",
education: "software engineer",

getSummary: function(){
    return `${this.firstname} ${this.lastname} lives in ${this.city}. His birth year ${this,this.birthyear}`
}
}

console.log(person.getSummary());


// Step1 check in which method we use "this method"
// Step1 Owner of the mothod(Who is calling those method)