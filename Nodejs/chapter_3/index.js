// Express

const fs = require("fs");
const express = require("express");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const server = express();

//bodyParser
server.use(express.json());

server.use(express.static('public'));


// Middle ware

server.use((req, res, next)=>{
    console.log(req.method, req.ip, "aazim", req.hostname);
    next();
})


// Middleware for Auth (for routes)

const auth = (req, res, next)=>{
    console.log(req.query);
    if (req.body.password=='123') {
        next();
    } else {
        res.sendStatus(401);
    }
    
}

server.use(auth);



// API - Endpoint - Route

server.get("/", (req, res) => {
    res.json({ type: "GET" });
});

server.post("/", (req, res) => {
    res.json({ type: "POST" });
});

server.put("/", (req, res) => {
    res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
    res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
    res.json({ type: "PATCH" });
});


server.get("/demo", (req, res) => {
    // res.json(products)
    // res.send("hello")
});


server.listen(8080, () => {
    console.log("Server is running");
});
