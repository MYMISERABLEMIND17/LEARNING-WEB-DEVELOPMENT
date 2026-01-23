// let main = document.querySelector("#main"); 
// main.addEventListener("change",function(cng){

// })
let h1 = document.querySelector("h1")
h1.addEventListener("change" , function(){    
})

window.addEventListener("keydown", function(change){

    if(change.key === " "){
            h1.textContent = "Space" ;
    }
    else{
        h1.textContent = change.key ;
    }
})
