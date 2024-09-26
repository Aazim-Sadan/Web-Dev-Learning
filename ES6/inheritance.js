class User {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
} 
 

const getUser = new Teacher("aazimsadan", "aazim@gmail.com", "123")

getUser.logMe()

const getUsers = new User ("sadan")

getUsers.logMe()

console.log(getUser instanceof Teacher);
console.log(getUser instanceof User);


