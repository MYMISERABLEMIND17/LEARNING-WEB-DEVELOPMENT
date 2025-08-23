let valueLabel=document.querySelector("#valueLabel")
let x = 0 ;
let progress = document.querySelector(".progress");
let fill = document.querySelector(".fill");
let thumb = document.querySelector(".thumb");
let title = document.querySelector(".title");
setInterval(function(){
    
    if(x<100){
        x = x + 1;
    }
    else{
        title.textContent = "Loading complete!";
    }
    valueLabel.textContent = ""+x;
    progress.style.width = x + "%"; 
    fill.style.width = x + "%"; 
    thumb.style.left = x + "%";

},100)
// as