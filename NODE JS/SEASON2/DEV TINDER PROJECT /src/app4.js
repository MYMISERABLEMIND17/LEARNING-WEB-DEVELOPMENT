const express = require("express")
const app = express();
const connectDB = require("./config/database")
const User = require("./model/schema")

app.post("/signup" , async(req , res ) =>{
    const firstuser = new User({
    firstName : "Akshay" , 
    lastName: "saini",
    age : "44" , 
    contactNumber :"0000000000"
  }) ; 

  await firstuser.save() ; 

  res.send(" data saved in database ")
})

  connectDB()
    .then(() => {
      console.log("db is connected ")
      app.listen( 7777 , ()=>{
        console.log("the app starts ");
      }); 
    })
    .catch((err) =>{
      console.error(" not connected to db ")
    })



