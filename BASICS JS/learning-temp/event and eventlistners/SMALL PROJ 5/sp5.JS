let input = document.querySelector("input")
let count = document.querySelector("#count")
input.addEventListener("input" , function(){
    count.innerText = input.value.length;
})
