const myArray = []
    % DebugPrint(myArray)

// Continious, Holey Array

// SMI (small integer )
// Packed elements
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS 

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo, 10)
// hasOwnProperty(arrTwo.prototype, 10)

// holes are very expensive in js


const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI_ > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_ PACKED

const arrFour = new Array(3)
// just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity)

// for, for-of, forEach
