const express = require("express")
const app3 = express() ; 

const {admincheck} = require("../middleware/admincheck")

app3.listen("3002 " , ()=>{
  console.log("server start at 3002");
})

app3.use("/home" , (req  , res) =>{
  res.send(" this is the home page of the app3  ")
})

app3.use("/admincheck" , admincheck) ; 

app3.get("/admincheck/getdata" , (req , res )=>{
  res.send("data found , transaction  complete ") ; 
}) ; 