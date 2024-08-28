// for each

let coding = ["Js", "Py", "C++", "Java", "Py"]

coding.forEach(function (item) {
    console.log(item);

})



let myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    }
]


myCoding.forEach((item) => {
console.log(item.languageName);

})
