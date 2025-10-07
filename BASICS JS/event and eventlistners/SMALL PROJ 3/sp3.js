let form = document.querySelector("form");
let main = document.querySelector("#main")
let inputs = document.querySelectorAll("input")

form.addEventListener("submit" , function(val){
    val.preventDefault();    
let card = document.createElement("div")
card.classList.add("card")

let profile = document.createElement("div")
profile.classList.add("profile");



let img = document.createElement("img")
img.setAttribute("src" , inputs[0].value) ; 

let h3 = document.createElement("h3")
h3.textContent = inputs[1].value

let h4 = document.createElement("h4")
h4.textContent =inputs[2].value 

let h6 = document.createElement("h6")
h6.textContent = inputs[3].value

profile.appendChild(img); 
card.appendChild(profile)

card.appendChild(h3);
card.appendChild(h4);
card.appendChild(h6);

main.appendChild(card)
console.log(card);

inputs.forEach(function(inp){
    if(inp.type !=="submit"){
        inp.value =""
    }
})


})











