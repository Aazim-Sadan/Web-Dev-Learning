// Map, Filter, Reduce 

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const multiplyArr = arr.filter((item, index) => {
    return item >= 4
})

// console.log(multiplyArr);


const newArr = arr.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

// console.log(newArr);





// Map vs forEach
const arr2 = [2, 4, 6, 8]

// we can chain stuff on map
const sumArr = arr2.map((ar) => {
    return ar * 2
}).filter((ar) => {
    return ar < 15
})

// we cannot chain in forEach, coz it doesn't return anything
const sumForEach = arr2.forEach((ar) => {
    return ar * 2
})

console.log(sumArr, sumForEach)