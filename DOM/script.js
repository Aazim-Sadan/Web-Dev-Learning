let targetP = document.querySelector('p')

targetP.innerHTML = "cool dude"

targetP.style.color= "red"

let para = document.createElement('p')
para.innerText = "This paragragh created by createElement"
document.body.append(para) 



let targetHeading = document.querySelector(".head")

// replace class 
targetHeading.classList.replace("head", "ffff")

console.log(targetHeading.children)

