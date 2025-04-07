
// factorial

let fact = 1

for (i = 5; i > 0; i--) {
    fact = fact * i
}

console.log(fact);



// nested loop to print a 3*3 grid of numbers
var sum = 1
for (let i = 1; i < 4; i++) {
    let str = ""
    for (let j = 1; j < 4; j++) {
        str += `${sum} `
        sum++;
    }
    console.log(str);
}



// Use a for loop reverse an array [1,2,3,4]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp;
}


//while loop for logging 1 - 100 that divisible by 5

for (i = 1; i < 101; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
let num = 1
while (num < 101) {
    if (num % 5 === 0) {
        console.log(num);
    }
    num++
}


// Sort an array of numbers [3,8,2,7] in ascending order (bubble sort)

var sorrt = [3, 6, 8, 2, 9]

for (var j = 0; j < sorrt.length - 1; j++) {
    for (var i = 0; i < sorrt.length - j - 1; i++) {
        if (sorrt[i] > sorrt[i + 1]) {
            var temp = sorrt[i]
            sorrt[i] = sorrt[i + 1]
            sorrt[i + 1] = temp
        }
    }
}

console.log(sorrt);


// create a copy of array without mutating the original

var copyArray = [3, 6, 8, 2, 9]

var copyArray2 = []

copyArray.forEach((value) => {
    copyArray2.push(value)
})

console.log(copyArray2);


// even or odd

const evod = (value) => {
    if (value % 2 === 0) return true
    else return false
}

console.log(evod(5));


// function accept an array and return sum of that array

const sumArray = (arr) => {
    sum = 0
    arr.forEach((value) => {
        sum = sum + value
    })
    return sum
}

console.log(sumArray([2, 3, 4, 5]));


// function accept string and returns the reverse

const reverseString = (value) => {
    return value.split('').reverse().join('')
}

console.log(reverseString("aazim"));


// function to create longest number of an array


const longestArrayNum = (arr) => {
    var MAX = 0
    for (i = 1; i < arr.length; i++){
        if(arr[i] > arr[MAX]){
            MAX = i
        }
    }
    return arr[MAX]
}

console.log(longestArrayNum([4,5,6,3,6]));


//////////////////

let sorrrt = [ 4,6,2,83,7]


