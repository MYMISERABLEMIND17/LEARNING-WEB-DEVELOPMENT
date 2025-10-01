gsap.from("#box1" ,{
    x:1000 , 
    duration: 3, 
    delay :2 ,
    rotate:(360), 
    backgroundColor : "green", 
    borderRadius: "50%",
    repeat:-1 , 
    yoyo : true ,

}) 

gsap.from("#box2" ,{  
    x : 1000 , 
    duration :3.1 , 
    delay: 2 ,
    borderRadius: "50%",
    repeat:-1 , 
    yoyo : true ,
})
