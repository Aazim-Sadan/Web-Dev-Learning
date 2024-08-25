// Object Orirnted Programming 

// Chaining Method 

// class declaration 

class backAccount{
    constructor(owner, pin){
        this.owner = owner
        this.pin = pin
        this.movements = [];
    }

    getMovements(){
        return this.movements
    }
    deposit(val){
        this.movements.push(val);
        return this;
    }
    withdraw(val){
        this.deposit(-val);
        return this
    }

}

let account = new backAccount("Zack", 5252)
// Chain of methods 
account.deposit(45).withdraw(30).deposit(100).withdraw(54)

console.log(account.getMovements());
console.log(account);

