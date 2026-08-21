const { overwriteMiddlewareArguments } = require("mongoose")



const getTasks =(req, res) => {
    

res.status(200).json({ message: `Get tasks` })
}

const getTask =(req, res) => {
let id =req.params.id;
res.status(200).json({ message: `Get taskid ${id}` })
}


const postTask=(req, res) => {
    const {Taskid,body,status}=req.body;
    if(!Taskid| !body|!status)
 res.status(400).json({ message: `Missing body` })
res.status(200).json(req.body)
}

const putTask =(req, res) => {
 res.status(200).json({ message: `update user ${req.params.id}` })
}

const deleteTask=(req, res) => {
res.status(200).json({ message: `delete user ${req.params.id}` })
}



module.exports= {getTasks,getTask,postTask,putTask,deleteTask}