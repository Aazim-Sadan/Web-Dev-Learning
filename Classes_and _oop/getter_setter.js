class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }


    get password() {
        return `${this._password}aazim`
    }

    set password(value) {
        this._password = value
    }
}

const aazim = new User("aazim@sadan.ai", "abc")
console.log(aazim.password);
console.log(aazim.email);

