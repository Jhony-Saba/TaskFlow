const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true,"Plaese enter the user name"],
  }
,
 userid:{
    type:String,
    required:[true,"Plaese enter the user id"],
    unique:true,
    
  },
   password:{
    type:String,
    required:[true,"Plaese enter the user password"],
  },
  description:{
    type:String,
    default:"",
  }
})

module.exports = mongoose.model("user",userSchema);



