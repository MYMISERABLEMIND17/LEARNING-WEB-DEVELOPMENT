const express = require("express")

const app = express() ; 

app.listen(3000 , ()=> {
  console.log("hello the server is running ");
  
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