// let block  = document.querySelector("#block")

// block.addEventListener("mouseover" ,function(){
//     block.style.backgroundColor =  "red"
// }) ; 

// block.addEventListener("mouseout" ,function(){
//     block.style.backgroundColor =  "yellow"
// }) ; 
//  start learning mousemove

let box = document.querySelector(".box")
window.addEventListener("mousemove", function(details){
    console.log(details.clientX , details.clientY);
    box.style.top = details.clientY +"px";
    box.style.left = details.clientX +"px";
    
})




