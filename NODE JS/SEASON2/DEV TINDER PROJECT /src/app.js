const express = require("express")

const app = express() ; 

app.listen(3000 , ()=> {
  console.log("hello the server is running ");  
})

app.get("/home/profile1" , (req , res) => {
  res.send({name: "tom " , age : 33 }  + "this is post call " ) ; 
  res.send()
})

app.post("/home/profile1" , (req , res) => {
  res.send("this is the post call ")
})

app.put("/home/profile1" , (req , res) =>{
  res.send(" this is the put call ")
})



app.use("/home/profile1" , (req , res) => {
  res.send("this is the profile 1 ") ; 
})
app.use( "/home" ,  (req , res ) =>{
  res.send("hi this is the home page "); 
}) 
app.use( "/"  , (req , res ) => {
  res.send(" this is dashboard");
  
})