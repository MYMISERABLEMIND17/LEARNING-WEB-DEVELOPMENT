const mongoose = require("mongoose") ; 

const schema =  mongoose.Schema({
  firstName : {
    type:String  
  } , 
  lastName :{
    type:String 
  },
  age:{
    type:int
  },
  contactNumber :{
    type:int
  }
})