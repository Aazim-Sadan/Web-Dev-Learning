// for-in loop (Each iteration return a "Key" of object)  

let chocolate = {
    Lindt: "Lindor",
    Cadburry: "Dairy Milk",
    Nestle: "Kit-Kat"
}

console.log(chocolate);

let x = ""
for(let key in chocolate){
    x = x + chocolate[key]
}

console.log(x);
