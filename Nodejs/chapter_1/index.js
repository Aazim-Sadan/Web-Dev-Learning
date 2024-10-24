// file module 

const fs = require('fs');
const expess = require('express')




const text = fs.readFileSync('demo.txt', 'utf-8', (err, text) => {
    console.log(text);

})

console.log(text);
