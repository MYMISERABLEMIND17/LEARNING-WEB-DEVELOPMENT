let main = document.querySelector("#main"); 
let cursor = document.querySelector("#cursor") ; 
let image = document.querySelector("#image") ; 
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor ,{
        x:dets.x ,
        y:dets.y, 
        scale:0.5
    })
})

image.addEventListener("mousemove",function(){
    gsap.to(cursor , {
        scale:3
    })
})
image.addEventListener("mouseleave",function(){
    gsap.to(cursor , {
        scale:0.5 
    })
})
