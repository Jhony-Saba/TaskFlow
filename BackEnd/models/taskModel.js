const mongoose = require("mongoose")


const taskSchema = mongoose.Schema({
  tasktittle:{
    type:String,
    required:[true,"Plaese enter the task tittle"],
  }
,
 taskid:{
    type:Number,
    required:[true,"Plaese enter the task id"],
    unique:true,
    
    
  },
  taskdescription:{
    type:String,
    default:"",
  },
  status:{
    type:String,
require:[true,"Please  enter  task description"]
  },
})

module.exports = mongoose.model("task",taskSchema);
