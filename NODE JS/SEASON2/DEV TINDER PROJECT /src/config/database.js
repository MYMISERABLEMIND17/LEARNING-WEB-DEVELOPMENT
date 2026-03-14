// mongodb+srv://TRIAL:<db_password>@devtinder.ta4cwsg.mongodb.net/?appName=devtinder
const mongoose  = require("mongoose")

mongoose.connect(
  "mongodb+srv://TRIAL:ParakramAHOME17@devtinder.ta4cwsg.mongodb.net/?appName=devtinder"
)

const connectDB = 
  async () =>{
    mongoose.connect(
      "mongodb+srv://TRIAL:ParakramAHOME17@devtinder.ta4cwsg.mongodb.net/?appName=devtinder"
    )
  } 



module.exports = connectDB ; 