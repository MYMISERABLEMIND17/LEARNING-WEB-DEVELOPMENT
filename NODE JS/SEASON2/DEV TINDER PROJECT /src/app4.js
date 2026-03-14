const express = require("express")
const app = express();
const connectDB = require("./config/database")



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



