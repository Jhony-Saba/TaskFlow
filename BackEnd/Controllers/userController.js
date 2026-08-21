const { overwriteMiddlewareArguments } = require("mongoose")



const getUsers =(req, res) => {
    

res.status(200).json({ message: `Get users ` })
}

const getUser =(req, res) => {
let id =req.params.id;

res.status(200).json({ message: `Get user ${id}` })
}





const postUser=(req, res) => {
 res.status(200).json({ message: `Add user` })
}

const putUser =(req, res) => {
 res.status(200).json({ message: `update user ${req.params.id}` })
}

const deleteUser=(req, res) => {
res.status(200).json({ message: `delete user ${req.params.id}` })
}



module.exports= {getUsers,getUser,postUser,putUser,deleteUser}