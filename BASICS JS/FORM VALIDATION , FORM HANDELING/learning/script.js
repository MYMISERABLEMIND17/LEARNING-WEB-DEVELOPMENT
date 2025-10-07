let yname = document.querySelector("#yname");
let form = document.querySelector("#myForm");
let nameerr = document.querySelector("#nameerr")
form.addEventListener("submit", function(event){
    event.preventDefault()

    if(yname.value.length <2 ){
        nameerr.style.display = "initial"
    }
    
})


// you cn use regix for validation