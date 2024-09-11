let person = {
    username: "aazimsadan",
    folloers: 333,
    isLoggedIn: true,

    getPersonDetail: function () {
        console.log(`Username is ${this.username} and his follower count is ${this.folloers}`);

    }

}

console.log(person.getPersonDetail());


   function User (username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

let userOne = new User("aazimsadan", 11, true)
let userTwo = new User("harry", 7, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);

