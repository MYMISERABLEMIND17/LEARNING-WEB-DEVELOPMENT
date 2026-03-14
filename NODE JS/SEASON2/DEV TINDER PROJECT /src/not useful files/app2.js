const express = require("express")

const app2 = express() ; 


app2.listen(3001 , ()=>{
  console.log("this port is start on port 3001");
})


app2.get("/yyyy" , (req , res , next) => {
  // res.send("this is 1 ")
  next()
}) 

app2.get("/yyyy" , (req , res , next) =>{
  res.send("this is user 2 ")
} )




app2.use("/user1" ,[ 
  (req , res , next ) => {
    console.log(" this is the user 1 profile ")
    res.send(" this is user 1 ")
    next()  ; 
  }
  ,
  (req , res , next )=> {
    console.log(" response 2 ");
    res.send(" this is the  response 2 ")
    next(); 

  } , 
  (req , res , next ) => {
    console.log(" this is response 3 ");
    res.send( " this is the res 3 ")
    // next()
  }])