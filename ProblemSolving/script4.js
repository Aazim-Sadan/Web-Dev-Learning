// Currying in javascript
// exp f(a,b) to f(a)(b)

function f(a) {
    return function (b) {
        return `${a} ${b}`;
    }
}
console.log(f(5)(2));


// =========================


// Ques 1 : sum(2)(6)(1)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(sum(2)(6)(1));



// ==========================

/* Ques 2 :
       evaluate("sum")(4)(2) = 6
       evaluate("multiply")(4)(2) = 8
       evaluate("divide")(4)(2) = 2
       evaluate("substract")(4)(2)= 2
*/

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "substract") return a - b;
            else return "Invalid Operation";
        };
    };
}
const mul = evaluate("multiply")
console.log(mul(3)(4)); // 12
console.log(mul(4)(2)); // 8




// ==============================

// Infinite currying

function add(a) {
    return function (b) {
        if (b) return add(a + b)
        else
            return a;
    }
}
console.log(add(5)(2)(4)(1)());





// ===============================

// Currying and Partial Application

function sums(a) {
    return function (b, c) {
        return a + b + c;
    }
}
const x = sums(20)
console.log(x(2, 4));

// or

console.log(sums(20)(2, 3));



// ================================

// Convert f(a, b, c, d) to f(a)(b)(c)(d)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length)
            return func(...args)
        else
            return function (...next) {
                return curriedFunc(...args, ...next)
            }
    }
}
const plus = (a, b, c, d) => a + b + c + d;

const totalSum = curry(plus);
console.log(totalSum(1)(2)(3)(4));