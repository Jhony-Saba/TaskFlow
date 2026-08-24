const mongoose = require("mongoose")


const projectSchema = mongoose.Schema({
  projecttittle:{
    type:String,
    required:[true,"Plaese enter the project tittle"],
  }
,
 projectid:{
    type:Number,
    required:[true,"Plaese enter the project id"],
    unique:true,
    
    
  },
  projectdescription:{
    type:String,
    default:"",
  }})

module.exports = mongoose.model("project",projectSchema);