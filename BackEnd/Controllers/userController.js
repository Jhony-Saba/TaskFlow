const asyncHandler =require("express-async-handler");



const getUsers =asyncHandler(async(req, res) => {
res.status(200).json({ message: `Get users ` })
})

const getUser =asyncHandler(async(req, res) => {
let id =req.params.id;

res.status(200).json({ message: `Get user ${id}` })
})

const postUser=asyncHandler(async(req, res) => {
    const {username,userid,password}=req.body;
    if(!username |!userid |!password)
 res.status(400).json({ message: `Add user` })
res.status(200).json(req.body)
})
const putUser =asyncHandler(async(req, res) => {
 res.status(200).json({ message: `update user ${req.params.id}` })
})

const deleteUser=asyncHandler(async(req, res) => {
res.status(200).json({ message: `delete user ${req.params.id}` })
})



module.exports= {getUsers,getUser,postUser,putUser,deleteUser}