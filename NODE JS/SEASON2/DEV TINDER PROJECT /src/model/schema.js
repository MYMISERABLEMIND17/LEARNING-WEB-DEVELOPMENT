const mongoose = require("mongoose") ; 

const userSchema =  mongoose.Schema({
  firstName : {
    type:String  
  } , 
  lastName :{
    type:String 
  },
  age:{
    type:String
  },
  contactNumber :{
    type:String
  } ,
  
})

const userModel = mongoose.model("User" , userSchema)

module.exports = userModel ; 