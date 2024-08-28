// for of 


let languages = ["React", "Node", "JavaScript", "TypeScript"]

for (let lang of languages) {
    console.log(lang);

}


let greeting = "Hello World"

for (let greet of greeting) {
    // console.log(`Each char is ${greet}`);

}


// uging for-of loop in Map()

let map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);


for (let [key, value] of map) {
    console.log(key, '-> ', value);
}




// ======================================================================

//                        For-in loop


let lang = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'

}

for (const key in lang) {
    console.log(`${key} shortcut is for ${lang[key]}`);
    
}



// for-it loop in Array 

let language = ["Js", "C++", "Py", "Java"]

for (const key in language) {
    console.log(language[key]);

}
