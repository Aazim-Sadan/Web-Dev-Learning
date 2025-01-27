// file module 

const fs = require('fs');
const http = require('http')
const os = require('os')

console.log(os.cpus().length)


// Non-blocking request 
fs.readFile("demo.txt", "utf-8", (err, result) => {
    console.log(result)
})


const text = fs.readFileSync('demo.txt', 'utf-8')
// console.log(text)

const contact = fs.writeFileSync("myContact.txt", "Hey there, Its me Aazim")

fs.cpSync("myContact.txt", "copy.txt")


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: New Request recieved\n`
    fs.appendFile("log.txt", log, () => {
        switch (req.url) {
            case "/":
                res.end("Hello");
            case "/about":
                res.end("I am Aazim Sadan");
                break;
                default:
                    res.end("404 - Not found");

        }
    })
})

myServer.listen(8000, () => console.log("Server listen at PORT 8000"))


