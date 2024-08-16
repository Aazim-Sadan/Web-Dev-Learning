// Objects inside array

let blocklist = [{ userName: "John", reason: "Abusive content" }, { userName: "Vann", reason: "copyRight content" }]

console.log(blocklist);


for (i = 0; i < blocklist.length; i++){
    console.log(`User ${blocklist[i].userName} blocked due to ${blocklist[i].reason}`);
    
}