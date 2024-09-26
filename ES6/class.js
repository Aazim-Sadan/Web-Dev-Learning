class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
        
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

let userData = new User("aazimsadan", "aazim@gmail.com", "446688")

console.log(userData.encryptPassword())
console.log(userData.changeUsername());


// behind the scene


function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}


let usersData = new User("aazimsadan", "sadan@gmail.com", "446688")

console.log(usersData.encryptPassword())
console.log(usersData.changeUsername());
