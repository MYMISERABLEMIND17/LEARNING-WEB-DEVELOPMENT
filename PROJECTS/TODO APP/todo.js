/// step 1 => get access what you have written in the input field/
//  step 1 => stop the reloading of the window 
let addbtn = document.querySelector(".addbtn")
let input = document.querySelector(".userinp")
addbtn.addEventListener("click", function(e){
    e.preventDefault()    
    console.log(input.value);
    // step 1 => // create the similar element like tgs
    let container = document.createElement("div") 
    let tasks = document.createElement("li")
    let buttons = document.createElement("div")
    let donebtn = document.createElement("button")
    let delbtn = document.createElement("button")

    buttons.appendChild(donebtn)
    buttons.appendChild(delbtn)
    tasks.appendChild(buttons)
    container.appendChild(tasks)
})


