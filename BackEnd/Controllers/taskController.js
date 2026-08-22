const asyncHandler =require("express-async-handler");


const getTasks =asyncHandler(async(req, res) => {   
res.status(200).json({ message: `Get tasks` })
})

const getTask = asyncHandler(async(req, res) => {
let id =req.params.id;
res.status(200).json({ message: `Get taskid ${id}` })
})


const postTask=asyncHandler(async(req, res) => {
    const {Taskid,body,status}=req.body;
    if(!Taskid| !body|!status){
 res.status(400);
throw new Error("Missing body");

}
res.status(200).json(req.body)
})

const putTask =asyncHandler(async(req, res) => {
 res.status(200).json({ message: `update user ${req.params.id}` })
})

const deleteTask=asyncHandler(async(req, res) => {
res.status(200).json({ message: `delete user ${req.params.id}` })
})



module.exports= {getTasks,getTask,postTask,putTask,deleteTask}