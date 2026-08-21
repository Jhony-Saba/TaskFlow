const { overwriteMiddlewareArguments } = require("mongoose")



const getUsers =(req, res) => {
    

res.status(200).json({ message: `Get users ` })
}

const getUser =(req, res) => {
let id =req.params.id;

res.status(200).json({ message: `Get user ${id}` })
}





const postUser=(req, res) => {
    const {username,userid,password}=req.body;
    if(!username |!userid |!password)
 res.status(400).json({ message: `Add user` })
res.status(200).json(req.body)
}

const putUser =(req, res) => {
 res.status(200).json({ message: `update user ${req.params.id}` })
}

const deleteUser=(req, res) => {
res.status(200).json({ message: `delete user ${req.params.id}` })
}



module.exports= {getUsers,getUser,postUser,putUser,deleteUser}